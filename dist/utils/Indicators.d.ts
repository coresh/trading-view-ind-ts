import { DataArgs } from './types';
/**
 * Indicators Class
 */
export default class Indicators {
    log: boolean;
    constructor(log?: boolean);
    /**
     * Initialize Session
     */
    initSession(): Promise<boolean>;
    /**
     * Get Data
     */
    getData(args: DataArgs): Promise<any>;
    /**
     * Print Output
     */
    private print;
    /**
     * Log Data
     */
    private logData;
    /**
     * Get Raw Data
     */
    private getRawData;
    /**
     * Parse Data
     */
    private parseData;
}
