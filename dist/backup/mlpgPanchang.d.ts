export declare class MlpgPanchang {
    private mlpgLocalConstant;
    private mlpgPkgConstants;
    private mlpgCalculateFunc;
    private mlpgSunMoonTimer;
    private mlpgCalendar;
    calculate(dt: Date): {
        Day: any;
        Tithi: any;
        Paksha: any;
        Nakshatra: any;
        Karna: any;
        Yoga: any;
        Ayanamsa: any;
        Raasi: any;
        Julian: any;
        Gana: any;
        Guna: any;
        Trinity: any;
    };
    calendar(dt: Date, lat: number, lng: number, height?: number): {
        Tithi: any;
        Paksha: any;
        Nakshatra: any;
        Yoga: any;
        Karna: any;
        Masa: any;
        MoonMasa: any;
        Raasi: any;
        Ritu: any;
        Gana: any;
        Guna: any;
        Trinity: any;
    };
    sunTimer(date: Date, lat: number, lng: number, height?: number): any;
    getMlpgConstant(catgory: string, name: string): Array<string>;
    setMlpgConstant(catgory: string, name: string, mlpglist: Array<string>): void;
    getGanaMatched(brideIno: number, groomIno: number): number;
}
