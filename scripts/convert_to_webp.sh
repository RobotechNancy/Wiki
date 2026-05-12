# Copyright (c) 2010, Google Inc. All rights reserved for WEBP binary
# https://www.webmproject.org/license/software/

# fuck python, i'm going with bash (just kidding, I love python but not for this)

#region Color

# Source - https://stackoverflow.com/a/28938235
# Posted by Shakiba Moshiri, modified by community. See post 'Timeline' for change history
# Retrieved 2026-05-06, License - CC BY-SA 4.0

# Reset
Color_Off='\033[0m'       # Text Reset

# Regular Colors
Black='\033[0;30m'        # Black
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan
White='\033[0;37m'        # White

# Bold
BBlack='\033[1;30m'       # Black
BRed='\033[1;31m'         # Red
BGreen='\033[1;32m'       # Green
BYellow='\033[1;33m'      # Yellow
BBlue='\033[1;34m'        # Blue
BPurple='\033[1;35m'      # Purple
BCyan='\033[1;36m'        # Cyan
BWhite='\033[1;37m'       # White

# Underline
UBlack='\033[4;30m'       # Black
URed='\033[4;31m'         # Red
UGreen='\033[4;32m'       # Green
UYellow='\033[4;33m'      # Yellow
UBlue='\033[4;34m'        # Blue
UPurple='\033[4;35m'      # Purple
UCyan='\033[4;36m'        # Cyan
UWhite='\033[4;37m'       # White

# Background
On_Black='\033[40m'       # Black
On_Red='\033[41m'         # Red
On_Green='\033[42m'       # Green
On_Yellow='\033[43m'      # Yellow
On_Blue='\033[44m'        # Blue
On_Purple='\033[45m'      # Purple
On_Cyan='\033[46m'        # Cyan
On_White='\033[47m'       # White

# High Intensity
IBlack='\033[0;90m'       # Black
IRed='\033[0;91m'         # Red
IGreen='\033[0;92m'       # Green
IYellow='\033[0;93m'      # Yellow
IBlue='\033[0;94m'        # Blue
IPurple='\033[0;95m'      # Purple
ICyan='\033[0;96m'        # Cyan
IWhite='\033[0;97m'       # White

# Bold High Intensity
BIBlack='\033[1;90m'      # Black
BIRed='\033[1;91m'        # Red
BIGreen='\033[1;92m'      # Green
BIYellow='\033[1;93m'     # Yellow
BIBlue='\033[1;94m'       # Blue
BIPurple='\033[1;95m'     # Purple
BICyan='\033[1;96m'       # Cyan
BIWhite='\033[1;97m'      # White

# High Intensity backgrounds
On_IBlack='\033[0;100m'   # Black
On_IRed='\033[0;101m'     # Red
On_IGreen='\033[0;102m'   # Green
On_IYellow='\033[0;103m'  # Yellow
On_IBlue='\033[0;104m'    # Blue
On_IPurple='\033[0;105m'  # Purple
On_ICyan='\033[0;106m'    # Cyan
On_IWhite='\033[0;107m'   # White

#endregion Color

#region Utility functions

Date=$(date +"%Y/%m/%d %H:%M")

debug() {
    if [ "$LOGLEVEL" = "debug" ] || [  -z "$LOGLEVEL" ]; then
        case $# in
            1*) echo -e "$BBlue[DEBUG] - $Date :$Blue $1 $Color_Off";;
            2*) echo -e "$BBlue[DEBUG] - $Date :$Blue $1 $BBlack$2$Color_Off";;
            3*) echo -e "$BBlue[DEBUG] - $Date :$Blue $1 $BBlack$2$Blue $3 $Color_Off";;
        esac
    fi
}
info() {
    if [ "$LOGLEVEL" = "info" ] || [  -z "$LOGLEVEL" ]; then
        case $# in
            1*) echo -e "$BGreen[INFO]  - $Date :$Green $1 $Color_Off";;
            2*) echo -e "$BGreen[INFO]  - $Date :$Green $1 $BBlack$2$Color_Off";;
            3*) echo -e "$BGreen[INFO]  - $Date :$Green $1 $BBlack$2$Green $3 $Color_Off";;
        esac
    fi
}
warn() {
    if [ "$LOGLEVEL" = "warn" ] || [  -z "$LOGLEVEL" ]; then
        case $# in
            1*) echo -e "$BYellow[WARN]  - $Date :$Yellow $1 $Color_Off";;
            2*) echo -e "$BYellow[WARN]  - $Date :$Yellow $1 $BBlack$2$Color_Off";;
            3*) echo -e "$BYellow[WARN]  - $Date :$Yellow $1 $BBlack$2$Yellow $3 $Color_Off";;
        esac
    fi
}
error() {
    if [ "$LOGLEVEL" = "error" ] || [  -z "$LOGLEVEL" ]; then
        case $# in
            1*) echo -e "$BRed[ERROR] - $Date :$Red $1 $Color_Off";;
            2*) echo -e "$BRed[ERROR] - $Date :$Red $1 $BBlack$2$Color_Off";;
            3*) echo -e "$BRed[ERROR] - $Date :$Red $1 $BBlack$2$Red $3 $Color_Off";;
        esac
    fi
}

#endregion Utility functions

#region OS Check

if [ "$OSTYPE" == "linux-gnu"* ]; then
    if [ ! -e "./scripts/bin/cwebp" ]; then
        error "cwebp is not missing"
        exit 1
    fi
    cwebp="./scripts/bin/cwebp"
elif [ "$OSTYPE" == "cygwin" ] || [ "$OSTYPE" == "msys" ]; then
    if [ ! -e "./scripts/bin/cwebp.exe" ]; then
        error "cwebp is missing"
        exit 1
    fi
    cwebp="./scripts/bin/cwebp.exe"
fi

#endregion OS Check

info "cwebp found at" "$cwebp"

filetypes="jpg png jpeg"

info "Starting compression"
sleep 0.5

for ext in $filetypes; do
    files=$(find . -name "*.$ext" -not -path "./docs/.vitepress/*")
    if [ "$files" = "" ]; then
        warn "No image found with extension" $ext
        continue
    fi

    for i in $files; do
        name_webp="${i%.$ext}.webp";
        if [ -e "$name_webp" ]; then
            debug "Skipping" "$i" "already exist"
            continue;
        fi
        debug "processing $i"
        $cwebp -lossless -q 100 $i -o $(echo $i | sed s/$ext/webp/g);
    done
done

read -p "Replace urls in files ? (y/N) " confirm_replace

if [ "$confirm_replace" = "y" ]; then
    for ext in $filetypes; do
        info "Replacing extensions in" $ext "files"
        files=$(grep -ERal --color "[a-zA-Z0-9_]+\.$ext" --exclude-dir=node_modules --include="*.md")
        if [ -z "$files" ]; then
            warn "No file containing images path found for ext" $ext
        else
            perl_replace=$'s/([\["\'])(?!https?:)([a-zA-Z0-9\/\._-]*\.)('$ext')/$1$2webp/g;'
            debug "Perl regex" $perl_replace
            for file in $files; do
                debug "Processing" "$file"
                perl -i -pe $perl_replace $file 2>&1;
            done
        fi
    done
else
    debug "Skipped" "$ext" "file path replacement"
fi

read -p "Delete files original files ? (y/N) " confirm_delete

if [ "$confirm_delete" = "y" ]; then
    for ext in $filetypes; do
        error $(find . -name "*.$ext" -not -path "./docs/.vitepress/*" -exec rm {} \; 2>&1 > /dev/null)
        debug "Removed" $ext "files"
    done
else
    debug "Skipped" "$ext" "file deletion"
fi

info "Script exited without error"
