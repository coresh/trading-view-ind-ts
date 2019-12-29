"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const methods = __importStar(require("./indCompute"));
/**
 * Scan Columns
 */
const scanColumns = [
    'Recommend.Other',
    'Recommend.All',
    'Recommend.MA',
    'RSI',
    'RSI[1]',
    'Stoch.K',
    'Stoch.D',
    'Stoch.K[1]',
    'Stoch.D[1]',
    'CCI20',
    'CCI20[1]',
    'ADX',
    'ADX+DI',
    'ADX-DI',
    'ADX+DI[1]',
    'ADX-DI[1]',
    'AO',
    'AO[1]',
    'Mom',
    'Mom[1]',
    'MACD.macd',
    'MACD.signal',
    'Stoch.RSI.K',
    'Rec.Stoch.RSI',
    'W.R',
    'Rec.WR',
    'BBPower',
    'Rec.BBPower',
    'UO',
    'Rec.UO',
    'EMA5',
    'SMA5',
    'EMA10',
    'SMA10',
    'EMA20',
    'SMA20',
    'EMA30',
    'SMA30',
    'EMA50',
    'SMA50',
    'EMA100',
    'SMA100',
    'EMA200',
    'SMA200',
    'close',
    'Ichimoku.BLine',
    'Rec.Ichimoku',
    'VWMA',
    'Rec.VWMA',
    'HullMA9',
    'Rec.HullMA9',
];
exports.scanColumns = scanColumns;
/**
 * Scan Metrics
 */
var scanMetrics = {
    'Recommend.Other': {
        title: 'Oscillators',
    },
    'Recommend.All': {
        title: 'Summary',
    },
    'Recommend.MA': {
        title: 'Moving Averages',
    },
    'RSI': {
        title: 'Relative Strength Index (14)',
        method: methods.RSI,
    },
    'RSI[1]': 'RSI',
    'Stoch.K': {
        title: 'Stochastic %K (14, 3, 3)',
        method: methods.stochastic,
    },
    'Stoch.D': 'Stoch.K',
    'Stoch.K[1]': 'Stoch.K',
    'Stoch.D[1]': 'Stoch.K',
    'CCI20': {
        title: 'Commodity Channel Index (20)',
        method: methods.commodityChannelIndex,
    },
    'CCI20[1]': 'CCI20',
    'ADX': {
        title: 'Average Directional Index (14)',
        method: methods.averageDirectionalIndex,
    },
    'ADX+DI': 'ADX',
    'ADX-DI': 'ADX',
    'ADX+DI[1]': 'ADX',
    'ADX-DI[1]': 'ADX',
    'AO': {
        title: 'Awesome Oscillator',
        method: methods.awesomeOscillator,
    },
    'AO[1]': 'AO',
    'Mom': {
        title: 'Momentum (10)',
        method: methods.momentum,
    },
    'Mom[1]': 'Mom',
    'MACD.macd': {
        title: 'MACD Level (12, 26)',
        method: methods.MACD,
    },
    'MACD.signal': 'MACD.macd',
    'Stoch.RSI.K': {
        title: 'Stochastic RSI Fast (3, 3, 14, 14)',
        method: methods.simpleSignal,
    },
    'Rec.Stoch.RSI': 'Stoch.RSI.K',
    'W.R': {
        title: 'Williams Percent Range (14)',
        method: methods.simpleSignal,
    },
    'Rec.WR': 'W.R',
    'BBPower': {
        title: 'Bull Bear Power',
        method: methods.simpleSignal,
    },
    'Rec.BBPower': 'BBPower',
    'UO': {
        title: 'Ultimate Oscillator (7, 14, 28)',
        method: methods.simpleSignal,
    },
    'Rec.UO': 'UO',
    'EMA5': {
        title: 'Exponential Moving Average (5)',
        method: methods.movingAverage,
    },
    'SMA5': {
        title: 'Simple Moving Average (5)',
        method: methods.movingAverage,
    },
    'EMA10': {
        title: 'Exponential Moving Average (10)',
        method: methods.movingAverage,
    },
    'SMA10': {
        title: 'Simple Moving Average (10)',
        method: methods.movingAverage,
    },
    'EMA20': {
        title: 'Exponential Moving Average (20)',
        method: methods.movingAverage,
    },
    'SMA20': {
        title: 'Simple Moving Average (20)',
        method: methods.movingAverage,
    },
    'EMA30': {
        title: 'Exponential Moving Average (30)',
        method: methods.movingAverage,
    },
    'SMA30': {
        title: 'Simple Moving Average (30)',
        method: methods.movingAverage,
    },
    'EMA50': {
        title: 'Exponential Moving Average (50)',
        method: methods.movingAverage,
    },
    'SMA50': {
        title: 'Simple Moving Average (50)',
        method: methods.movingAverage,
    },
    'EMA100': {
        title: 'Exponential Moving Average (100)',
        method: methods.movingAverage,
    },
    'SMA100': {
        title: 'Simple Moving Average (100)',
        method: methods.movingAverage,
    },
    'EMA200': {
        title: 'Exponential Moving Average (200)',
        method: methods.movingAverage,
    },
    'SMA200': {
        title: 'Simple Moving Average (200)',
        method: methods.movingAverage,
    },
    'close': [
        'EMA5',
        'SMA5',
        'EMA10',
        'SMA10',
        'EMA20',
        'SMA20',
        'EMA30',
        'SMA30',
        'EMA50',
        'SMA50',
        'EMA100',
        'SMA100',
        'EMA200',
        'SMA200',
    ],
    'Ichimoku.BLine': {
        title: 'Ichimoku Cloud Base Line (9, 26, 52, 26)',
        method: methods.simpleSignal,
    },
    'Rec.Ichimoku': 'Ichimoku.BLine',
    'VWMA': {
        title: 'Volume Weighted Moving Average (20)',
        method: methods.simpleSignal,
    },
    'Rec.VWMA': 'VWMA',
    'HullMA9': {
        title: 'Hull Moving Average (9)',
        method: methods.simpleSignal,
    },
    'Rec.HullMA9': 'HullMA9',
};
exports.scanMetrics = scanMetrics;
//# sourceMappingURL=scanValues.js.map