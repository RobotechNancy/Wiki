# LiDAR

Cette fonction permet de commencer la réception des données à l’aide d’une méthode qui s’appelle  DMA et qui fonctionne par interruptions.

```c
void LIDAR_start_uart_receive(void) {
    HAL_UARTEx_ReceiveToIdle_DMA(Descriptor->huart, LIDAR_rx_buffer, RX_BUFFER_SIZE);

    __HAL_DMA_DISABLE_IT(Descriptor->hdma_usart_rx,DMA_IT_HT);
}
```


Il s’agit de « Receive to idle » ce qui signifie que les interruptions ont lieu automatiquement à la fin  de chaque message reçu par la carte de la part du lidar. De cette manière, le message est alors stocké  dans un buffer (LIDAR_rx_buffer) et nous obtenons la taille du message reçu.

```c
void LIDAR_uart_rx_interrupt_routine(UART_HandleTypeDef *huart, uint16_t Size) {
    // HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_10);
    if (huart != Descriptor->huart) return;

    NewMessage(LIDAR_rx_buffer, Size);

    LIDAR_start_uart_receive();
    // HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_10);
}
```

Voici la fonction qui se lance lorsqu’une interruption a lieu. Ici, la valeur Size est la taille du message  que nous venons d’obtenir.
On utilise la fonction NewMessage que nous verrons plus tard qui permet de gérer les messages en  attente de traitement.
Enfin, nous relançons une nouvelle réception jusqu’à l’arrivée d’un nouveau message.

```c
void NewMessage(uint8_t *msg, uint16_t Size) {
    if (Flags.new_msg_1 == LIDAR_NO_MESSAGE) {
        memcpy(LIDAR_rx_msg_1, msg, _Size);
        LIDAR_rx_msg_1_len = Size;
        Flags.new_msg_1 = LIDAR_NEW_MESSAGE;
    } else if (Flags.new_msg_2 == LIDAR_NO_MESSAGE) {
        memcpy(LIDAR_rx_msg_2, msg, _Size);
        LIDAR_rx_msg_2_len = Size;
        Flags.new_msg_2 = LIDAR_NEW_MESSAGE;
    } else {
        // message perdu
    }
}
```

La fonction NewMessage permet donc de mettre le message reçu dans une file d’attente de deux  places maximums.

```c
void ProcessingQueue() {
    if (Flags.new_msg_1 == LIDAR_NEW_MESSAGE) {
        Flags.new_msg_1 = LIDAR_NO_MESSAGE;
        current_message = 1;
        Processing(LIDAR_rx_msg_1, LIDAR_rx_msg_1_len);
    }else if (Flags.new_msg_2 == LIDAR_NEW_MESSAGE) {
        Flags.new_msg_2 = LIDAR_NO_MESSAGE;
        current_message = 2;
        Processing(LIDAR_rx_msg_2, LIDAR_rx_msg_2_len);
    } else {
        // aucun message à traiter
    }
}
```

Cette fonction permet de récupérer les messages dans la file d’attente afin de les traiter.

```c
void Processing(uint8_t msg [], uint16_t len){
    LIDAR_Coherence_Status = LIDAR_Coherence(msg, len);
    LIDAR_Coherence_Status = COHERENT_MESSAGE;
    if (LIDAR_Coherence_Status == COHERENT_MESSAGE) {
        traduction(msg, len);
        areas_attribution();
        if (HAL_GetTick() >= 1000){
            clearFarDistances();
            robotPosition();
            LIDAR_Collision_Status = obstacleDetection(teta);
            if (LIDAR_Collision_Status == 1) {
                uint8_t data[2] = {0x42,obstacles};
                send(CAN_ADDR_RASPBERRY, VALEUR_TOF, data, 2, true, 1, 42);
                collision_send = 1;
            } else if(collision_send == 1) {
                uint8_t data[1] = {0x43};
                send(CAN_ADDR_RASPBERRY, VALEUR_TOF, data, 1, true, 1, 43);
                collision_send = 0;
            }
        }
    }
}
```


Cette fonction permet :
- Tester si le message est cohérent (bon packet header et bonne taille) - Si le message est cohérent on le traduit
- Areas_attribution est à ignorer, cela servait pour la caractérisation - clearFarDistances permet d’ignorer les mesures en dehors du terrain de jeu - robotPosition calcul la position du robot
- on véirifie ensuite s’il y a un obstacle et si oui il est envoyé sur le bus CAN - de plus si l’obstacle disparait on envoi aussi un signal sur le bus CAN
Pour la fonction de traduction, se référer à notre rapport technique.

Erreurs à éviter :
- Sous-estimer l’importance de l’alimentation
- Ne pas utiliser le bon baudrate (230400 pour le Lidar) ce qui rendrait toute  communication impossible.
- Bien faire attention au niveau des branchements Rx/Tx.
- Ne pas mettre des temps de timeout trop faibles sinon les données risqueraient de  ne pas avoir le temps d’arriver.
- Ne surtout pas oublier de vider les buffer, une variable mal initialisée pourrait  prendre des valeurs aléatoires à cause de ce qui reste dans la mémoire, penser à bien  initialiser ses variables à 0 par exemple.
- Faire attention aux choix de variables, dans notre cas les valeurs négatives ne nous  intéressent pas alors privilégier uint8_t, uint18_t, etc à short, int, etc

En cas de questions, contactez :
- `tom.grandjanin2@etu.univ-lorraine.fr`
- `fabien.le-bras4@etu.univ-lorraine.fr`
