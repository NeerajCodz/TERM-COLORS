class Foreground {
    static BLACK="\x1b[30m";static BLK=Foreground.BLACK;
    static RED="\x1b[31m";static RED=Foreground.RED;
    static GREEN="\x1b[32m";static GRN=Foreground.GREEN;
    static YELLOW="\x1b[33m";static YLW=Foreground.YELLOW;
    static BLUE="\x1b[34m";static BLU=Foreground.BLUE;
    static MAGENTA="\x1b[35m";static MAG=Foreground.MAGENTA;
    static CYAN="\x1b[36m";static CYN=Foreground.CYAN;
    static GRAY="\x1b[90m";static GRY=Foreground.GRAY;
    static BRED="\x1b[91m";static BLRED=Foreground.BRED;static BRD=Foreground.BRED;static BRIGHTRED=Foreground.BRED;
    static BGREEN="\x1b[92m";static BLGREEN=Foreground.BGREEN;static BGRN=Foreground.BGREEN;static BRIGHTGREEN=Foreground.BGREEN;
    static BYELLOW="\x1b[93m";static BLYELLOW=Foreground.BYELLOW;static BYLW=Foreground.BYELLOW;static BRIGHTYELLOW=Foreground.BYELLOW;
    static BBLUE="\x1b[94m";static BLBLUE=Foreground.BBLUE;static BBLU=Foreground.BBLUE;static BRIGHTBLUE=Foreground.BBLUE;
    static BMAGENTA="\x1b[95m";static BLMAGENTA=Foreground.BMAGENTA;static BMAG=Foreground.BMAGENTA;static BRIGHTMAGENTA=Foreground.BMAGENTA;
    static BCYAN="\x1b[96m";static BLCYAN=Foreground.BCYAN;static BCYN=Foreground.BCYAN;static BRIGHTCYAN=Foreground.BCYAN;
    static BGRAY="\x1b[37m";static BLGRAY=Foreground.BGRAY;static BGRY=Foreground.BGRAY;static BRIGHTGRAY=Foreground.BGRAY;
    static WHITE="\x1b[97m";static WHT=Foreground.WHITE;static BRIGHTWHITE=Foreground.WHITE;
}

class Background {
    static BLACK="\x1b[40m";static BGBLK=Background.BLACK;
    static RED="\x1b[41m";static BGRD=Background.RED;
    static GREEN="\x1b[42m";static BGGRN=Background.GREEN;
    static YELLOW="\x1b[43m";static BGYLW=Background.YELLOW;
    static BLUE="\x1b[44m";static BGBLU=Background.BLUE;
    static MAGENTA="\x1b[45m";static BGMAG=Background.MAGENTA;
    static CYAN="\x1b[46m";static BGCYN=Background.CYAN;
    static BGRAY="\x1b[47m";static BGBGRY=Background.BGRAY;
    static GRAY="\x1b[100m";static BGGRY=Background.GRAY;
    static BRED="\x1b[101m";static BLRED=Background.BRED;static BGBRD=Background.BRED;
    static BGREEN="\x1b[102m";static BLGREEN=Background.BGREEN;static BGBGN=Background.BGREEN;
    static BYELLOW="\x1b[103m";static BLYELLOW=Background.BYELLOW;static BGBYW=Background.BYELLOW;
    static BBLUE="\x1b[104m";static BLBLUE=Background.BBLUE;static BGBBU=Background.BBLUE;
    static BMAGENTA="\x1b[105m";static BLMAGENTA=Background.BMAGENTA;static BGBMAG=Background.BMAGENTA;
    static BCYAN="\x1b[106m";static BLCYAN=Background.BCYAN;static BGBBCY=Background.BCYAN;
    static WHITE="\x1b[107m";static BGWHT=Background.WHITE;
}

class Reset {
    static INVISIBLE="\x1b[8m";static INV=Reset.INVISIBLE;static IN=Reset.INVISIBLE;
    static RESETCOLOR="\x1b[39m";static RC=Reset.RESETCOLOR;static NC=Reset.RESETCOLOR;static COLOR=Reset.RESETCOLOR;
    static RESETBG="\x1b[49m";static RBG=Reset.RESETBG;static NBG=Reset.RESETBG;static BG=Reset.RESETBG;
    static RESETFONT="\x1b[20m";static RF=Reset.RESETFONT;static NF=Reset.RESETFONT;static FONT=Reset.RESETFONT;
    static RESETALL="\x1b[0m";static RA=Reset.RESETALL;static NA=Reset.RESETALL;static ALL=Reset.RESETALL;
}

class Bold {
    static BLACK="\x1b[1;30m";static BDBLACK=Bold.BLACK;static BDBLK=Bold.BLACK;
    static RED="\x1b[1;31m";static BDRED=Bold.RED;static BDRD=Bold.RED;
    static GREEN="\x1b[1;32m";static BDGREEN=Bold.GREEN;static BDGRN=Bold.GREEN;
    static YELLOW="\x1b[1;33m";static BDYELLOW=Bold.YELLOW;static BDYLW=Bold.YELLOW;
    static BLUE="\x1b[1;34m";static BDBLUE=Bold.BLUE;static BDBLU=Bold.BLUE;
    static MAGENTA="\x1b[1;35m";static BDMAGENTA=Bold.MAGENTA;static BDMAG=Bold.MAGENTA;
    static CYAN="\x1b[1;36m";static BDCYAN=Bold.CYAN;static BDCYN=Bold.CYAN;
    static BGRAY="\x1b[1;37m";static BDBGRAY=Bold.BGRAY;static BDBGRY=Bold.BGRAY;
    static GRAY="\x1b[1;90m";static BDGRAY=Bold.GRAY;static BDGRY=Bold.GRAY;
    static BRED="\x1b[1;91m";static BLRED=Bold.BRED;static BDBRED=Bold.BRED;static BDBRD=Bold.BRED;
    static BGREEN="\x1b[1;92m";static BLGREEN=Bold.BGREEN;static BDBGREEN=Bold.BGREEN;static BDBGRN=Bold.BGREEN;
    static BYELLOW="\x1b[1;93m";static BLYELLOW=Bold.BYELLOW;static BDBYELLOW=Bold.BYELLOW;static BDBYLW=Bold.BYELLOW;
    static BBLUE="\x1b[1;94m";static BLBLUE=Bold.BBLUE;static BDBBLUE=Bold.BBLUE;static BDBBLU=Bold.BBLUE;
    static BMAGENTA="\x1b[1;95m";static BLMAGENTA=Bold.BMAGENTA;static BDBMAGENTA=Bold.BMAGENTA;static BDBMAG=Bold.BMAGENTA;
    static BCYAN="\x1b[1;96m";static BLCYAN=Bold.BCYAN;static BDBCYAN=Bold.BCYAN;static BDBCYN=Bold.BCYAN;
    static WHITE="\x1b[1;97m";static BDWHITE=Bold.WHITE;static BDWHT=Bold.WHITE;
}

class Faint {
    static BLACK="\x1b[2;30m";static FTBLACK=Faint.BLACK;static FTBLK=Faint.BLACK;
    static RED="\x1b[2;31m";static FTRED=Faint.RED;static FTRD=Faint.RED;
    static GREEN="\x1b[2;32m";static FTGREEN=Faint.GREEN;static FTGRN=Faint.GREEN;
    static YELLOW="\x1b[2;33m";static FTYELLOW=Faint.YELLOW;static FTYLW=Faint.YELLOW;
    static BLUE="\x1b[2;34m";static FTBLUE=Faint.BLUE;static FTBLU=Faint.BLUE;
    static MAGENTA="\x1b[2;35m";static FTMAGENTA=Faint.MAGENTA;static FTMAG=Faint.MAGENTA;
    static CYAN="\x1b[2;36m";static FTCYAN=Faint.CYAN;static FTCYN=Faint.CYAN;
    static BGRAY="\x1b[2;37m";static FTBGRAY=Faint.BGRAY;static FTBGRY=Faint.BGRAY;
    static GRAY="\x1b[2;90m";static FTGRAY=Faint.GRAY;static FTGRY=Faint.GRAY;
    static BRED="\x1b[2;91m";static BLRED=Faint.BRED;static FTBRED=Faint.BRED;static FTBRD=Faint.BRED;
    static BGREEN="\x1b[2;92m";static BLGREEN=Faint.BGREEN;static FTBGREEN=Faint.BGREEN;static FTBGRN=Faint.BGREEN;
    static BYELLOW="\x1b[2;93m";static BLYELLOW=Faint.BYELLOW;static FTBYELLOW=Faint.BYELLOW;static FTBYLW=Faint.BYELLOW;
    static BBLUE="\x1b[2;94m";static BLBLUE=Faint.BBLUE;static FTBBLUE=Faint.BBLUE;static FTBBLU=Faint.BBLUE;
    static BMAGENTA="\x1b[2;95m";static BLMAGENTA=Faint.BMAGENTA;static FTBMAGENTA=Faint.BMAGENTA;static FTBMAG=Faint.BMAGENTA;
    static BCYAN="\x1b[2;96m";static BLCYAN=Faint.BCYAN;static FTBCYAN=Faint.BCYAN;static FTBCYN=Faint.BCYAN;
    static WHITE="\x1b[2;97m";static FTWHITE=Faint.WHITE;static FTWHT=Faint.WHITE;
}

class Italic {
    static BLACK="\x1b[3;30m";static ITBLACK=Italic.BLACK;static ITBLK=Italic.BLACK;
    static RED="\x1b[3;31m";static ITRED=Italic.RED;static ITRD=Italic.RED;
    static GREEN="\x1b[3;32m";static ITGREEN=Italic.GREEN;static ITGRN=Italic.GREEN;
    static YELLOW="\x1b[3;33m";static ITYELLOW=Italic.YELLOW;static ITYLW=Italic.YELLOW;
    static BLUE="\x1b[3;34m";static ITBLUE=Italic.BLUE;static ITBLU=Italic.BLUE;
    static MAGENTA="\x1b[3;35m";static ITMAGENTA=Italic.MAGENTA;static ITMAG=Italic.MAGENTA;
    static CYAN="\x1b[3;36m";static ITCYAN=Italic.CYAN;static ITCYN=Italic.CYAN;
    static BGRAY="\x1b[3;37m";static ITBGRAY=Italic.BGRAY;static ITBGRY=Italic.BGRAY;
    static GRAY="\x1b[3;90m";static ITGRAY=Italic.GRAY;static ITGRY=Italic.GRAY;
    static BRED="\x1b[3;91m";static BLRED=Italic.BRED;static ITBRED=Italic.BRED;static ITBRD=Italic.BRED;
    static BGREEN="\x1b[3;92m";static BLGREEN=Italic.BGREEN;static ITBGREEN=Italic.BGREEN;static ITBGRN=Italic.BGREEN;
    static BYELLOW="\x1b[3;93m";static BLYELLOW=Italic.BYELLOW;static ITBYELLOW=Italic.BYELLOW;static ITBYLW=Italic.BYELLOW;
    static BBLUE="\x1b[3;94m";static BLBLUE=Italic.BBLUE;static ITBBLUE=Italic.BBLUE;static ITBBLU=Italic.BBLUE;
    static BMAGENTA="\x1b[3;95m";static BLMAGENTA=Italic.BMAGENTA;static ITBMAGENTA=Italic.BMAGENTA;static ITBMAG=Italic.BMAGENTA;
    static BCYAN="\x1b[3;96m";static BLCYAN=Italic.BCYAN;static ITBCYAN=Italic.BCYAN;static ITBCYN=Italic.BCYAN;
    static WHITE="\x1b[3;97m";static ITWHITE=Italic.WHITE;static ITWHT=Italic.WHITE;
}

class Underlined {
    static BLACK="\x1b[4;30m";static ULBLACK=Underlined.BLACK;static ULBLK=Underlined.BLACK;
    static RED="\x1b[4;31m";static ULRED=Underlined.RED;static ULRD=Underlined.RED;
    static GREEN="\x1b[4;32m";static ULGREEN=Underlined.GREEN;static ULGRN=Underlined.GREEN;
    static YELLOW="\x1b[4;33m";static ULYELLOW=Underlined.YELLOW;static ULYLW=Underlined.YELLOW;
    static BLUE="\x1b[4;34m";static ULBLUE=Underlined.BLUE;static ULBLU=Underlined.BLUE;
    static MAGENTA="\x1b[4;35m";static ULMAGENTA=Underlined.MAGENTA;static ULMAG=Underlined.MAGENTA;
    static CYAN="\x1b[4;36m";static ULCYAN=Underlined.CYAN;static ULCYN=Underlined.CYAN;
    static BGRAY="\x1b[4;37m";static ULBGRAY=Underlined.BGRAY;static ULBGRY=Underlined.BGRAY;
    static GRAY="\x1b[4;90m";static ULGRAY=Underlined.GRAY;static ULGRY=Underlined.GRAY;
    static BRED="\x1b[4;91m";static BLRED=Underlined.BRED;static ULBRED=Underlined.BRED;static ULBRD=Underlined.BRED;
    static BGREEN="\x1b[4;92m";static BLGREEN=Underlined.BGREEN;static ULBGREEN=Underlined.BGREEN;static ULBGRN=Underlined.BGREEN;
    static BYELLOW="\x1b[4;93m";static BLYELLOW=Underlined.BYELLOW;static ULBYELLOW=Underlined.BYELLOW;static ULBYLW=Underlined.BYELLOW;
    static BBLUE="\x1b[4;94m";static BLBLUE=Underlined.BBLUE;static ULBBLUE=Underlined.BBLUE;static ULBBLU=Underlined.BBLUE;
    static BMAGENTA="\x1b[4;95m";static BLMAGENTA=Underlined.BMAGENTA;static ULBMAGENTA=Underlined.BMAGENTA;static ULBMAG=Underlined.BMAGENTA;
    static BCYAN="\x1b[4;96m";static BLCYAN=Underlined.BCYAN;static ULBCYAN=Underlined.BCYAN;static ULBCYN=Underlined.BCYAN;
    static WHITE="\x1b[4;97m";static ULWHITE=Underlined.WHITE;static ULWHT=Underlined.WHITE;
}

class Blinking {
    static BLACK="\x1b[5;30m";static BLBLACK=Blinking.BLACK;static BLBLK=Blinking.BLACK;
    static RED="\x1b[5;31m";static RED=Blinking.RED;static BLRED="\x1b[5;91m";static BLRD=Blinking.BLRED;static BRIGHTRED=Blinking.BLRED;
    static GREEN="\x1b[5;32m";static GREEN=Blinking.GREEN;static BLGREEN="\x1b[5;92m";static BLGRN=Blinking.BLGREEN;static BRIGHTGREEN=Blinking.BLGREEN;
    static YELLOW="\x1b[5;33m";static YELLOW=Blinking.YELLOW;static BLYELLOW="\x1b[5;93m";static BLYLW=Blinking.BLYELLOW;static BRIGHTYELLOW=Blinking.BLYELLOW;
    static BLUE="\x1b[5;34m";static BLUE=Blinking.BLUE;static BLBLUE="\x1b[5;94m";static BLBLU=Blinking.BLBLUE;static BRIGHTBLUE=Blinking.BLBLUE;
    static MAGENTA="\x1b[5;35m";static MAGENTA=Blinking.MAGENTA;static BLMAGENTA="\x1b[5;95m";static BLMAG=Blinking.BLMAGENTA;static BRIGHTMAGENTA=Blinking.BLMAGENTA;
    static CYAN="\x1b[5;36m";static CYAN=Blinking.CYAN;static BLCYAN="\x1b[5;96m";static BLCYN=Blinking.BLCYAN;static BRIGHTCYAN=Blinking.BLCYAN;
    static BGRAY="\x1b[5;37m";static BLGRAY=Blinking.BGRAY;static BLBGRY=Blinking.BGRAY;
    static GRAY="\x1b[5;90m";static BLGRAYGRAY=Blinking.GRAY;static BLGRY=Blinking.GRAY;
    static BRED="\x1b[5;91m";static BLBRED=Blinking.BRED;static BLBRD=Blinking.BRED;
    static BGREEN="\x1b[5;92m";static BLBGREEN=Blinking.BGREEN;static BLBGRN=Blinking.BGREEN;
    static BYELLOW="\x1b[5;93m";static BLBYELLOW=Blinking.BYELLOW;static BLBYLW=Blinking.BYELLOW;
    static BBLUE="\x1b[5;94m";static BLBBLUE=Blinking.BBLUE;static BLBBLU=Blinking.BBLUE;
    static BMAGENTA="\x1b[5;95m";static BLBMAGENTA=Blinking.BMAGENTA;static BLBMAG=Blinking.BMAGENTA;
    static BCYAN="\x1b[5;96m";static BLBCYAN=Blinking.BCYAN;static BLBCYN=Blinking.BCYAN;
    static WHITE="\x1b[5;97m";static BLWHITE=Blinking.WHITE;static BLWHT=Blinking.WHITE;
}

class Reverse {
    static BLACK="\x1b[7;30m";static RBLACK=Reverse.BLACK;static RBLK=Reverse.BLACK;
    static RED="\x1b[7;31m";static RRED=Reverse.RED;static RRD=Reverse.RED;
    static GREEN="\x1b[7;32m";static RGREEN=Reverse.GREEN;static RGRN=Reverse.GREEN;
    static YELLOW="\x1b[7;33m";static RYELLOW=Reverse.YELLOW;static RYLW=Reverse.YELLOW;
    static BLUE="\x1b[7;34m";static RBLUE=Reverse.BLUE;static RBLU=Reverse.BLUE;
    static MAGENTA="\x1b[7;35m";static RMAGENTA=Reverse.MAGENTA;static RMAG=Reverse.MAGENTA;
    static CYAN="\x1b[7;36m";static RCYAN=Reverse.CYAN;static RCYN=Reverse.CYAN;
    static BGRAY="\x1b[7;37m";static RBGRAY=Reverse.BGRAY;static RBGRY=Reverse.BGRAY;
    static GRAY="\x1b[7;90m";static RGRAY=Reverse.GRAY;static RGRY=Reverse.GRAY;
    static BRED="\x1b[7;91m";static BLRED=Reverse.BRED;static RBRED=Reverse.BRED;static RBRD=Reverse.BRED;
    static BGREEN="\x1b[7;92m";static BLGREEN=Reverse.BGREEN;static RBGREEN=Reverse.BGREEN;static RBGRN=Reverse.BGREEN;
    static BYELLOW="\x1b[7;93m";static BLYELLOW=Reverse.BYELLOW;static RBYELLOW=Reverse.BYELLOW;static RBYLW=Reverse.BYELLOW;
    static BBLUE="\x1b[7;94m";static BLBLUE=Reverse.BBLUE;static RBBLUE=Reverse.BBLUE;static RBBLU=Reverse.BBLUE;
    static BMAGENTA="\x1b[7;95m";static BLMAGENTA=Reverse.BMAGENTA;static RBMAGENTA=Reverse.BMAGENTA;static RBMAG=Reverse.BMAGENTA;
    static BCYAN="\x1b[7;96m";static BLCYAN=Reverse.BCYAN;static RBCYAN=Reverse.BCYAN;static RBCYN=Reverse.BCYAN;
    static WHITE="\x1b[7;97m";static RWHITE=Reverse.WHITE;static RWHT=Reverse.WHITE;
}

class Strikethrough {
    static BLACK="\x1b[9;30m";static STBLACK=Strikethrough.BLACK;static STBLK=Strikethrough.BLACK;
    static RED="\x1b[9;31m";static STRED=Strikethrough.RED;static STRD=Strikethrough.RED;
    static GREEN="\x1b[9;32m";static STGREEN=Strikethrough.GREEN;static STGRN=Strikethrough.GREEN;
    static YELLOW="\x1b[9;33m";static STYELLOW=Strikethrough.YELLOW;static STYLW=Strikethrough.YELLOW;
    static BLUE="\x1b[9;34m";static STBLUE=Strikethrough.BLUE;static STBLU=Strikethrough.BLUE;
    static MAGENTA="\x1b[9;35m";static STMAGENTA=Strikethrough.MAGENTA;static STMAG=Strikethrough.MAGENTA;
    static CYAN="\x1b[9;36m";static STCYAN=Strikethrough.CYAN;static STCYN=Strikethrough.CYAN;
    static BGRAY="\x1b[9;37m";static STBGRAY=Strikethrough.BGRAY;static STBGRY=Strikethrough.BGRAY;
    static GRAY="\x1b[9;90m";static STGRAY=Strikethrough.GRAY;static STGRY=Strikethrough.GRAY;
    static BRED="\x1b[9;91m";static BLRED=Strikethrough.BRED;static STBRED=Strikethrough.BRED;static STBRD=Strikethrough.BRED;
    static BGREEN="\x1b[9;92m";static BLGREEN=Strikethrough.BGREEN;static STBGREEN=Strikethrough.BGREEN;static STBGN=Strikethrough.BGREEN;
    static BYELLOW="\x1b[9;93m";static BLYELLOW=Strikethrough.BYELLOW;static STBYELLOW=Strikethrough.BYELLOW;static STBYLW=Strikethrough.BYELLOW;
    static BBLUE="\x1b[9;94m";static BLBLUE=Strikethrough.BBLUE;static STBBLUE=Strikethrough.BBLUE;static STBBLU=Strikethrough.BBLUE;
    static BMAGENTA="\x1b[9;95m";static BLMAGENTA=Strikethrough.BMAGENTA;static STBMAGENTA=Strikethrough.BMAGENTA;static STBMAG=Strikethrough.BMAGENTA;
    static BCYAN="\x1b[9;96m";static BLCYAN=Strikethrough.BCYAN;static STBCYAN=Strikethrough.BCYAN;static STBCYN=Strikethrough.BCYAN;
    static WHITE="\x1b[9;97m";static STWHITE=Strikethrough.WHITE;static STWHT=Strikethrough.WHITE;
}

const trueColor = Foreground;
const fg = Foreground;
const bg = Background;
const b = Bold;
const i = Italic;
const u = Underlined;
const bl = Blinking;
const r = Reverse;
const st = Strikethrough;

// Example usage:
if (typeof process !== 'undefined') {
    console.log(`${fg.RED}Red text${Reset.RESETALL}`);
    console.log(`${Background.BGREEN}Bright green background${Reset.RESETALL}`);
    console.log(`${Bold.BBLUE}Bold bright blue text${Reset.RESETALL}`);
    console.log(`${Italic.BYELLOW}Italic bright yellow text${Reset.RESETALL}`);
    console.log(`${Underlined.BRED}Underlined bright red text${Reset.RESETALL}`);
    console.log(`${Blinking.BCYAN}Blinking bright cyan text${Reset.RESETALL}`);
    console.log(`${Reverse.BMAGENTA}Reverse bright magenta text${Reset.RESETALL}`);
    console.log(`${Strikethrough.BGREEN}Strikethrough bright green text${Reset.RESETALL}`);
}