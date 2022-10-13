const colorCodes = {
	blue: [34, 89],
	yellow: [33, 89],
	red: [31, 89],
	cyan: [36, 89],
	green: [32, 89],
	magenta: [35, 89],
	white: [37, 89],
	gray: [30, 89],

	redBright: [91, 39],
	greenBright: [92, 39],
	yellowBright: [93, 39],
	blueBright: [94, 39],
	magentaBright: [95, 39],
	cyanBright: [96, 39],
	whiteBright: [97, 39],

	bgBlack: [40, 49],
	bgRed: [41, 49],
	bgGreen: [42, 49],
	bgYellow: [43, 49],
	bgBlue: [44, 49],
	bgMagenta: [45, 49],
	bgCyan: [46, 49],
	bgWhite: [47, 49],

	bgBlackBright: [100, 49],
	bgRedBright: [101, 49],
	bgGreenBright: [102, 49],
	bgYellowBright: [103, 49],
	bgBlueBright: [104, 49],
	bgMagentaBright: [105, 49],
	bgCyanBright: [106, 49],
	bgWhiteBright: [107, 49]
};

const styleCodes = {
	reset: [0, 0],
	bold: [1, 22],
	dim: [2, 22],
	italic: [3, 23],
	underline: [4, 24],
	inverse: [7, 27],
	hidden: [8, 28],
	strikethrough: [9, 29]
};

const typeCodes = {
	SUCCESS: `\x1b[${colorCodes.greenBright[0]}m\x1b[${styleCodes.bold[0]}m✓ %s\x1b[${styleCodes.bold[1]}m\x1b[${colorCodes.greenBright[1]}m\x1b[0m`,
	ERROR: `\x1b[${colorCodes.redBright[0]}m\x1b[${styleCodes.bold[0]}mError: %s\x1b[${styleCodes.bold[1]}m\x1b[${colorCodes.redBright[1]}m\x1b[0m`,
	FAIL: `\x1b[${colorCodes.red[0]}m\x1b[${styleCodes.dim[0]}mX %s\x1b[${styleCodes.dim}m\x1b[${colorCodes.red[1]}m\x1b[0m`,
	INFO: `\x1b[${colorCodes.blue[0]}m-> %s\x1b[0m\x1b[${colorCodes.blue[1]}m\x1b[0m`,
	LINK: `\x1b[${colorCodes.blueBright[0]}m\x1b[${styleCodes.underline[0]}m%s\x1b[${styleCodes.underline[1]}m\x1b[${colorCodes.blueBright[1]}m\x1b[0m`
};

export const log = (
	text: string,
	options?: {
		color?: keyof typeof colorCodes;
		style?: keyof typeof styleCodes;
		preset?: keyof typeof typeCodes;
	}
) => {
	if (!options) return console.log(text);

	if (options.preset) return console.log(typeCodes[options.preset], text);

	const style = options.style && styleCodes[options.style];
	const color = options.color && colorCodes[options.color];

	return console.log(
		`${style ? `\x1b[${style[0]}m` : ''}${
			color ? `\x1b[${color[0]}m` : ''
		}${text}${color ? `\x1b[${color[1]}m` : ''}${
			style ? `\x1b[${style[1]}m` : ''
		}\x1b[0m`
	);
};
