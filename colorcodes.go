package main

import (
	"fmt"
)

// Foreground defines ANSI color codes for text foreground
type Foreground struct {
	BLACK, BLK           string
	RED, RD              string
	GREEN, GRN           string
	YELLOW, YLW          string
	BLUE, BLU            string
	MAGENTA, MAG         string
	CYAN, CYN            string
	GRAY, GRY            string
	BRED, BRD, BRIGHTRED string
	BGREEN, BGRN, BRIGHTGREEN string
	BYELLOW, BYLW, BRIGHTYELLOW string
	BBLUE, BBLU, BRIGHTBLUE string
	BMAGENTA, BMAG, BRIGHTMAGENTA string
	BCYAN, BCYN, BRIGHTCYAN string
	BGRAY, BGRY, BRIGHTGRAY string
	WHITE, WHT, BRIGHTWHITE string
}

// Background defines ANSI color codes for text background
type Background struct {
	BLACK, BGBLK         string
	RED, BGRD            string
	GREEN, BGGRN         string
	YELLOW, BGYLW        string
	BLUE, BGBLU          string
	MAGENTA, BGMAG       string
	CYAN, BGCYN          string
	BGRAY, BGBGRY        string
	GRAY, BGGRY          string
	BRED, BGBRD          string
	BGREEN, BGBGN        string
	BYELLOW, BGBYW       string
	BBLUE, BGBBU         string
	BMAGENTA, BGBMAG     string
	BCYAN, BGBBCY        string
	WHITE, BGWHT         string
}

// Reset defines ANSI codes for resetting styles
type Reset struct {
	INVISIBLE, INV, IN   string
	RESETCOLOR, RC, NC, COLOR string
	RESETBG, RBG, NBG, BG string
	RESETFONT, RF, NF, FONT string
	RESETALL, RA, NA, ALL string
}

// Bold defines ANSI codes for bold text
type Bold struct {
	BLACK, BDBLACK, BDBLK string
	RED, BDRED, BDRD      string
	GREEN, BDGREEN, BDGRN string
	YELLOW, BDYELLOW, BDYLW string
	BLUE, BDBLUE, BDBLU   string
	MAGENTA, BDMAGENTA, BDMAG string
	CYAN, BDCYAN, BDCYN   string
	BGRAY, BDBGRAY, BDBGRY string
	GRAY, BDGRAY, BDGRY   string
	BRED, BDBRED, BDBRD   string
	BGREEN, BDBGREEN, BDBGRN string
	BYELLOW, BDBYELLOW, BDBYLW string
	BBLUE, BDBBLUE, BDBBLU string
	BMAGENTA, BDBMAGENTA, BDBMAG string
	BCYAN, BDBCYAN, BDBCYN string
	WHITE, BDWHITE, BDWHT string
}

// Italic defines ANSI codes for italic text
type Italic struct {
	BLACK, ITBLACK, ITBLK string
	RED, ITRED, ITRD      string
	GREEN, ITGREEN, ITGRN string
	YELLOW, ITYELLOW, ITYLW string
	BLUE, ITBLUE, ITBLU   string
	MAGENTA, ITMAGENTA, ITMAG string
	CYAN, ITCYAN, ITCYN   string
	BGRAY, ITBGRAY, ITBGRY string
	GRAY, ITGRAY, ITGRY   string
	BRED, ITBRED, ITBRD   string
	BGREEN, ITBGREEN, ITBGRN string
	BYELLOW, ITBYELLOW, ITBYLW string
	BBLUE, ITBBLUE, ITBBLU string
	BMAGENTA, ITBMAGENTA, ITBMAG string
	BCYAN, ITBCYAN, ITBCYN string
	WHITE, ITWHITE, ITWHT string
}

// Underlined defines ANSI codes for underlined text
type Underlined struct {
	BLACK, ULBLACK, ULBLK string
	RED, ULRED, ULRD      string
	GREEN, ULGREEN, ULGRN string
	YELLOW, ULYELLOW, ULYLW string
	BLUE, ULBLUE, ULBLU   string
	MAGENTA, ULMAGENTA, ULMAG string
	CYAN, ULCYAN, ULCYN   string
	BGRAY, ULBGRAY, ULBGRY string
	GRAY, ULGRAY, ULGRY   string
	BRED, ULBRED, ULBRD   string
	BGREEN, ULBGREEN, ULBGRN string
	BYELLOW, ULBYELLOW, ULBYLW string
	BBLUE, ULBBLUE, ULBBLU string
	BMAGENTA, ULBMAGENTA, ULBMAG string
	BCYAN, ULBCYAN, ULBCYN string
	WHITE, ULWHITE, ULWHT string
}

// Blinking defines ANSI codes for blinking text
type Blinking struct {
	BLACK, BLBLACK, BLBLK string
	RED, BLRED, BLRD      string
	GREEN, BLGREEN, BLGRN string
	YELLOW, BLYELLOW, BLYLW string
	BLUE, BLBLUE, BLBLU   string
	MAGENTA, BLMAGENTA, BLMAG string
	CYAN, BLCYAN, BLCYN   string
	BGRAY, BLBGRAY, BLBGRY string
	GRAY, BLGRAY, BLGRY   string
	BRED, BLBRED, BLBRD   string
	BGREEN, BLBGREEN, BLBGRN string
	BYELLOW, BLBYELLOW, BLBYLW string
	BBLUE, BLBBLUE, BLBBLU string
	BMAGENTA, BLBMAGENTA, BLBMAG string
	BCYAN, BLBCYAN, BLBCYN string
	WHITE, BLWHITE, BLWHT string
}

// Reverse defines ANSI codes for reverse text
type Reverse struct {
	BLACK, RBLACK, RBLK   string
	RED, RRED, RRD        string
	GREEN, RGREEN, RGRN   string
	YELLOW, RYELLOW, RYLW string
	BLUE, RBLUE, RBLU     string
	MAGENTA, RMAGENTA, RMAG string
	CYAN, RCYAN, RCYN     string
	BGRAY, RBGRAY, RBGRY  string
	GRAY, RGRAY, RGRY     string
	BRED, RBRED, RBRD     string
	BGREEN, RBGREEN, RBGRN string
	BYELLOW, RBYELLOW, RBYLW string
	BBLUE, RBBLUE, RBBLU  string
	BMAGENTA, RBMAGENTA, RBMAG string
	BCYAN, RBCYAN, RBCYN  string
	WHITE, RWHITE, RWHT   string
}

// Strikethrough defines ANSI codes for strikethrough text
type Strikethrough struct {
	BLACK, STBLACK, STBLK string
	RED, STRED, STRD      string
	GREEN, STGREEN, STGRN string
	YELLOW, STYELLOW, STYLW string
	BLUE, STBLUE, STBLU   string
	MAGENTA, STMAGENTA, STMAG string
	CYAN, STCYAN, STCYN   string
	BGRAY, STBGRAY, STBGRY string
	GRAY, STGRAY, STGRY   string
	BRED, STBRED, STBRD   string
	BGREEN, STBGREEN, STBGN string
	BYELLOW, STBYELLOW, STBYLW string
	BBLUE, STBBLUE, STBBLU string
	BMAGENTA, STBMAGENTA, STBMAG string
	BCYAN, STBCYAN, STBCYN string
	WHITE, STWHITE, STWHT string
}

// Global variables
var (
	True = Foreground{
		BLACK: "\033[30m", BLK: "\033[30m",
		RED: "\033[31m", RD: "\033[31m",
		GREEN: "\033[32m", GRN: "\033[32m",
		YELLOW: "\033[33m", YLW: "\033[33m",
		BLUE: "\033[34m", BLU: "\033[34m",
		MAGENTA: "\033[35m", MAG: "\033[35m",
		CYAN: "\033[36m", CYN: "\033[36m",
		GRAY: "\033[90m", GRY: "\033[90m",
		BRED: "\033[91m", BRD: "\033[91m", BRIGHTRED: "\033[91m",
		BGREEN: "\033[92m", BGRN: "\033[92m", BRIGHTGREEN: "\033[92m",
		BYELLOW: "\033[93m", BYLW: "\033[93m", BRIGHTYELLOW: "\033[93m",
		BBLUE: "\033[94m", BBLU: "\033[94m", BRIGHTBLUE: "\033[94m",
		BMAGENTA: "\033[95m", BMAG: "\033[95m", BRIGHTMAGENTA: "\033[95m",
		BCYAN: "\033[96m", BCYN: "\033[96m", BRIGHTCYAN: "\033[96m",
		BGRAY: "\033[37m", BGRY: "\033[37m", BRIGHTGRAY: "\033[37m",
		WHITE: "\033[97m", WHT: "\033[97m", BRIGHTWHITE: "\033[97m",
	}
	Fg = True
	Bg = Background{
		BLACK: "\033[40m", BGBLK: "\033[40m",
		RED: "\033[41m", BGRD: "\033[41m",
		GREEN: "\033[42m", BGGRN: "\033[42m",
		YELLOW: "\033[43m", BGYLW: "\033[43m",
		BLUE: "\033[44m", BGBLU: "\033[44m",
		MAGENTA: "\033[45m", BGMAG: "\033[45m",
		CYAN: "\033[46m", BGCYN: "\033[46m",
		BGRAY: "\033[47m", BGBGRY: "\033[47m",
		GRAY: "\033[100m", BGGRY: "\033[100m",
		BRED: "\033[101m", BGBRD: "\033[101m",
		BGREEN: "\033[102m", BGBGN: "\033[102m",
		BYELLOW: "\033[103m", BGBYW: "\033[103m",
		BBLUE: "\033[104m", BGBBU: "\033[104m",
		BMAGENTA: "\033[105m", BGBMAG: "\033[105m",
		BCYAN: "\033[106m", BGBBCY: "\033[106m",
		WHITE: "\033[107m", BGWHT: "\033[107m",
	}
	R = Reset{
		INVISIBLE: "\033[8m", INV: "\033[8m", IN: "\033[8m",
		RESETCOLOR: "\033[39m", RC: "\033[39m", NC: "\033[39m", COLOR: "\033[39m",
		RESETBG: "\033[49m", RBG: "\033[49m", NBG: "\033[49m", BG: "\033[49m",
		RESETFONT: "\033[20m", RF: "\033[20m", NF: "\033[20m", FONT: "\033[20m",
		RESETALL: "\033[0m", RA: "\033[0m", NA: "\033[0m", ALL: "\033[0m",
	}
	B = Bold{
		BLACK: "\033[1;30m", BDBLACK: "\033[1;30m", BDBLK: "\033[1;30m",
		RED: "\033[1;31m", BDRED: "\033[1;31m", BDRD: "\033[1;31m",
		GREEN: "\033[1;32m", BDGREEN: "\033[1;32m", BDGRN: "\033[1;32m",
		YELLOW: "\033[1;33m", BDYELLOW: "\033[1;33m", BDYLW: "\033[1;33m",
		BLUE: "\033[1;34m", BDBLUE: "\033[1;34m", BDBLU: "\033[1;34m",
		MAGENTA: "\033[1;35m", BDMAGENTA: "\033[1;35m", BDMAG: "\033[1;35m",
		CYAN: "\033[1;36m", BDCYAN: "\033[1;36m", BDCYN: "\033[1;36m",
		BGRAY: "\033[1;37m", BDBGRAY: "\033[1;37m", BDBGRY: "\033[1;37m",
		GRAY: "\033[1;90m", BDGRAY: "\033[1;90m", BDGRY: "\033[1;90m",
		BRED: "\033[1;91m", BDBRED: "\033[1;91m", BDBRD: "\033[1;91m",
		BGREEN: "\033[1;92m", BDBGREEN: "\033[1;92m", BDBGRN: "\033[1;92m",
		BYELLOW: "\033[1;93m", BDBYELLOW: "\033[1;93m", BDBYLW: "\033[1;93m",
		BBLUE: "\033[1;94m", BDBBLUE: "\033[1;94m", BDBBLU: "\033[1;94m",
		BMAGENTA: "\033[1;95m", BDBMAGENTA: "\033[1;95m", BDBMAG: "\033[1;95m",
		BCYAN: "\033[1;96m", BDBCYAN: "\033[1;96m", BDBCYN: "\033[1;96m",
		WHITE: "\033[1;97m", BDWHITE: "\033[1;97m", BDWHT: "\033[1;97m",
	}
	I = Italic{
		BLACK: "\033[3;30m", ITBLACK: "\033[3;30m", ITBLK: "\033[3;30m",
		RED: "\033[3;31m", ITRED: "\033[3;31m", ITRD: "\033[3;31m",
		GREEN: "\033[3;32m", ITGREEN: "\033[3;32m", ITGRN: "\033[3;32m",
		YELLOW: "\033[3;33m", ITYELLOW: "\033[3;33m", ITYLW: "\033[3;33m",
		BLUE: "\033[3;34m", ITBLUE: "\033[3;34m", ITBLU: "\033[3;34m",
		MAGENTA: "\033[3;35m", ITMAGENTA: "\033[3;35m", ITMAG: "\033[3;35m",
		CYAN: "\033[3;36m", ITCYAN: "\033[3;36m", ITCYN: "\033[3;36m",
		BGRAY: "\033[3;37m", ITBGRAY: "\033[3;37m", ITBGRY: "\033[3;37m",
		GRAY: "\033[3;90m", ITGRAY: "\033[3;90m", ITGRY: "\033[3;90m",
		BRED: "\033[3;91m", ITBRED: "\033[3;91m", ITBRD: "\033[3;91m",
		BGREEN: "\033[3;92m", ITBGREEN: "\033[3;92m", ITBGRN: "\033[3;92m",
		BYELLOW: "\033[3;93m", ITBYELLOW: "\033[3;93m", ITBYLW: "\033[3;93m",
		BBLUE: "\033[3;94m", ITBBLUE: "\033[3;94m", ITBBLU: "\033[3;94m",
		BMAGENTA: "\033[3;95m", ITBMAGENTA: "\033[3;95m", ITBMAG: "\033[3;95m",
		BCYAN: "\033[3;96m", ITBCYAN: "\033[3;96m", ITBCYN: "\033[3;96m",
		WHITE: "\033[3;97m", ITWHITE: "\033[3;97m", ITWHT: "\033[3;97m",
	}
	U = Underlined{
		BLACK: "\033[4;30m", ULBLACK: "\033[4;30m", ULBLK: "\033[4;30m",
		RED: "\033[4;31m", ULRED: "\033[4;31m", ULRD: "\033[4;31m",
		GREEN: "\033[4;32m", ULGREEN: "\033[4;32m", ULGRN: "\033[4;32m",
		YELLOW: "\033[4;33m", ULYELLOW: "\033[4;33m", ULYLW: "\033[4;33m",
		BLUE: "\033[4;34m", ULBLUE: "\033[4;34m", ULBLU: "\033[4;34m",
		MAGENTA: "\033[4;35m", ULMAGENTA: "\033[4;35m", ULMAG: "\033[4;35m",
		CYAN: "\033[4;36m", ULCYAN: "\033[4;36m", ULCYN: "\033[4;36m",
		BGRAY: "\033[4;37m", ULBGRAY: "\033[4;37m", ULBGRY: "\033[4;37m",
		GRAY: "\033[4;90m", ULGRAY: "\033[4;90m", ULGRY: "\033[4;90m",
		BRED: "\033[4;91m", ULBRED: "\033[4;91m", ULBRD: "\033[4;91m",
		BGREEN: "\033[4;92m", ULBGREEN: "\033[4;92m", ULBGRN: "\033[4;92m",
		BYELLOW: "\033[4;93m", ULBYELLOW: "\033[4;93m", ULBYLW: "\033[4;93m",
		BBLUE: "\033[4;94m", ULBBLUE: "\033[4;94m", ULBBLU: "\033[4;94m",
		BMAGENTA: "\033[4;95m", ULBMAGENTA: "\033[4;95m", ULBMAG: "\033[4;95m",
		BCYAN: "\033[4;96m", ULBCYAN: "\033[4;96m", ULBCYN: "\033[4;96m",
		WHITE: "\033[4;97m", ULWHITE: "\033[4;97m", ULWHT: "\033[4;97m",
	}
	Bl = Blinking{
		BLACK: "\033[5;30m", BLBLACK: "\033[5;30m", BLBLK: "\033[5;30m",
		RED: "\033[5;31m", BLRED: "\033[5;31m", BLRD: "\033[5;31m",
		GREEN: "\033[5;32m", BLGREEN: "\033[5;32m", BLGRN: "\033[5;32m",
		YELLOW: "\033[5;33m", BLYELLOW: "\033[5;33m", BLYLW: "\033[5;33m",
		BLUE: "\033[5;34m", BLBLUE: "\033[5;34m", BLBLU: "\033[5;34m",
		MAGENTA: "\033[5;35m", BLMAGENTA: "\033[5;35m", BLMAG: "\033[5;35m",
		CYAN: "\033[5;36m", BLCYAN: "\033[5;36m", BLCYN: "\033[5;36m",
		BGRAY: "\033[5;37m", BLBGRAY: "\033[5;37m", BLBGRY: "\033[5;37m",
		GRAY: "\033[5;90m", BLGRAY: "\033[5;90m", BLGRY: "\033[5;90m",
		BRED: "\033[5;91m", BLBRED: "\033[5;91m", BLBRD: "\033[5;91m",
		BGREEN: "\033[5;92m", BLBGREEN: "\033[5;92m", BLBGRN: "\033[5;92m",
		BYELLOW: "\033[5;93m", BLBYELLOW: "\033[5;93m", BLBYLW: "\033[5;93m",
		BBLUE: "\033[5;94m", BLBBLUE: "\033[5;94m", BLBBLU: "\033[5;94m",
		BMAGENTA: "\033[5;95m", BLBMAGENTA: "\033[5;95m", BLBMAG: "\033[5;95m",
		BCYAN: "\033[5;96m", BLBCYAN: "\033[5;96m", BLBCYN: "\033[5;96m",
		WHITE: "\033[5;97m", BLWHITE: "\033[5;97m", BLWHT: "\033[5;97m",
	}
	Rv = Reverse{
		BLACK: "\033[7;30m", RBLACK: "\033[7;30m", RBLK: "\033[7;30m",
		RED: "\033[7;31m", RRED: "\033[7;31m", RRD: "\033[7;31m",
		GREEN: "\033[7;32m", RGREEN: "\033[7;32m", RGRN: "\033[7;32m",
		YELLOW: "\033[7;33m", RYELLOW: "\033[7;33m", RYLW: "\033[7;33m",
		BLUE: "\033[7;34m", RBLUE: "\033[7;34m", RBLU: "\033[7;34m",
		MAGENTA: "\033[7;35m", RMAGENTA: "\033[7;35m", RMAG: "\033[7;35m",
		CYAN: "\033[7;36m", RCYAN: "\033[7;36m", RCYN: "\033[7;36m",
		BGRAY: "\033[7;37m", RBGRAY: "\033[7;37m", RBGRY: "\033[7;37m",
		GRAY: "\033[7;90m", RGRAY: "\033[7;90m", RGRY: "\033[7;90m",
		BRED: "\033[7;91m", RBRED: "\033[7;91m", RBRD: "\033[7;91m",
		BGREEN: "\033[7;92m", RBGREEN: "\033[7;92m", RBGRN: "\033[7;92m",
		BYELLOW: "\033[7;93m", RBYELLOW: "\033[7;93m", RBYLW: "\033[7;93m",
		BBLUE: "\033[7;94m", RBBLUE: "\033[7;94m", RBBLU: "\033[7;94m",
		BMAGENTA: "\033[7;95m", RBMAGENTA: "\033[7;95m", RBMAG: "\033[7;95m",
		BCYAN: "\033[7;96m", RBCYAN: "\033[7;96m", RBCYN: "\033[7;96m",
		WHITE: "\033[7;97m", RWHITE: "\033[7;97m", RWHT: "\033[7;97m",
	}
	St = Strikethrough{
		BLACK: "\033[9;30m", STBLACK: "\033[9;30m", STBLK: "\033[9;30m",
		RED: "\033[9;31m", STRED: "\033[9;31m", STRD: "\033[9;31m",
		GREEN: "\033[9;32m", STGREEN: "\033[9;32m", STGRN: "\033[9;32m",
		YELLOW: "\033[9;33m", STYELLOW: "\033[9;33m", STYLW: "\033[9;33m",
		BLUE: "\033[9;34m", STBLUE: "\033[9;34m", STBLU: "\033[9;34m",
		MAGENTA: "\033[9;35m", STMAGENTA: "\033[9;35m", STMAG: "\033[9;35m",
		CYAN: "\033[9;36m", STCYAN: "\033[9;36m", STCYN: "\033[9;36m",
		BGRAY: "\033[9;37m", STBGRAY: "\033[9;37m", STBGRY: "\033[9;37m",
		GRAY: "\033[9;90m", STGRAY: "\033[9;90m", STGRY: "\033[9;90m",
		BRED: "\033[9;91m", STBRED: "\033[9;91m", STBRD: "\033[9;91m",
		BGREEN: "\033[9;92m", STBGREEN: "\033[9;92m", STBGN: "\033[9;92m",
		BYELLOW: "\033[9;93m", STBYELLOW: "\033[9;93m", STBYLW: "\033[9;93m",
		BBLUE: "\033[9;94m", STBBLUE: "\033[9;94m", STBBLU: "\033[9;94m",
		BMAGENTA: "\033[9;95m", STBMAGENTA: "\033[9;95m", STBMAG: "\033[9;95m",
		BCYAN: "\033[9;96m", STBCYAN: "\033[9;96m", STBCYN: "\033[9;96m",
		WHITE: "\033[9;97m", STWHITE: "\033[9;97m", STWHT: "\033[9;97m",
	}
)

func main() {
	fmt.Printf("%sRed text%s\n", Fg.RED, R.RESETALL)
	fmt.Printf("%sBright green background%s\n", Bg.BGREEN, R.RESETALL)
	fmt.Printf("%sBold bright blue text%s\n", B.BBLUE, R.RESETALL)
	fmt.Printf("%sItalic bright yellow text%s\n", I.BYELLOW, R.RESETALL)
	fmt.Printf("%sUnderlined bright red text%s\n", U.BRED, R.RESETALL)
	fmt.Printf("%sBlinking bright cyan text%s\n", Bl.BCYAN, R.RESETALL)
	fmt.Printf("%sReverse bright magenta text%s\n", Rv.BMAGENTA, R.RESETALL)
	fmt.Printf("%sStrikethrough bright green text%s\n", St.BGREEN, R.RESETALL)
}