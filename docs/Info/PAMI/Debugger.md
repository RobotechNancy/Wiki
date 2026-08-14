# Debugger

## Description

`Debugger` est un module qui fournit un mécanisme de **logging** via UART. Les messages ne sont émis que si le Debugger est actif (`is_active == true`), ce qui permet de l'activer uniquement lors des phases de test sans modifier le code des bibliothèques.

```c
typedef struct Debugger {
    bool                is_active;
    UART_HandleTypeDef* huart;
} Debugger;
```


## Attributs

| Attribut | Type | Description |
|---|---|---|
| `is_active` | `bool` | Si `false`, `Debugger_log` retourne immédiatement sans rien envoyer |
| `huart` | `UART_HandleTypeDef*` | Handle UART sur lequel les messages sont transmis |

---

## Méthodes publiques

### `Debugger_init`

```c
void Debugger_init(Debugger* self, UART_HandleTypeDef* huart);
```

Initialise le Debugger avec le handle UART fourni et met `is_active` à `false`. Le Debugger est **inactif par défaut** — il faut appeler `Debugger_enable` explicitement.

> [!IMPORTANT]
> Doit être appelé **avant** `PAMI_init` (ou l'initialisation de tout autre objet applicatif) si vous souhaitez capturer les erreurs d'initialisation.

**Exemple :**
```c
Debugger debugger;
Debugger_init(&debugger, &huart2);
Debugger_enable(&debugger);          // Activation explicite

PAMI pami = { .mobile_base = &mobile_base, .gripper = &gripper, .debugger = &debugger };
PAMI_init(&pami);
```

---

### `Debugger_enable`

```c
void Debugger_enable(Debugger* self);
```

Active le Debugger (`is_active = true`). À partir de cet appel, `Debugger_log` émet des messages sur l'UART.

---

### `Debugger_disable`

```c
void Debugger_disable(Debugger* self);
```

Désactive le Debugger (`is_active = false`). `Debugger_log` devient un no-op.

---

### `Debugger_log`

```c
void Debugger_log(Debugger* self, uint8_t code, char* source, char* message);
```

Formate et envoie un message d'erreur sur l'UART, puis appelle `Error_Handler()` pour arrêter le programme. Pour l'instant, l'erreur est signalée par le clignotement de la LED3 chaque 500ms.

Si `is_active == false`, la fonction retourne immédiatement sans rien envoyer ni arrêter le programme.

| Paramètre | Type | Description |
|---|---|---|
| `self` | `Debugger*` | Instance du Debugger |
| `code` | `uint8_t` | Code numérique de l'erreur (valeur de l'enum de statut de la bibliothèque concernée) |
| `source` | `char*` | Nom de la bibliothèque ou du module émetteur (ex: `"PAMI"`, `"Mobile_base"`) |
| `message` | `char*` | Description lisible de l'erreur |

**Format du message émis :**
```
[HALT][<source>][Code <code>] : <message>\r\n
```

**Exemple de sortie terminal :**
![Erreurs debug](/images/Info/PAMI/Log.webp)

**Exemple d'utilisation dans `PAMI.c` :**
```c
Mobile_base_status status = Mobile_base_init(self->mobile_base);
if (status != MOBILE_BASE_OK) {
    Debugger_log(self->debugger, status, "PAMI", "Mobile_base_init failed");
    return PAMI_ERR_EXECUTION_FAILED;
}
```

En cas d'erreur, le `code` affiché correspond à la valeur entière de l'enum de statut de la bibliothèque concernée. Ouvrir le `.h` correspondant pour l'identifier.



## Contrainte importante : ne pas utiliser dans les interruptions

`Debugger_log` appelle `HAL_UART_Transmit` en mode **bloquant**. Appeler du bloquant dans une routine d'interruption peut bloquer le système entier.