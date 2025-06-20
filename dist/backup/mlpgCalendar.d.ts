import { MlpgLocalConstant } from './mlpgLocalConstant';
import { MlpgPanchangImpl } from './mlpgPanchangImpl';
import { MlpgCalculateFunc } from './mlpgCalculateFunc';
export declare class MlpgCalendar {
    calendar(mlpgConstant: MlpgLocalConstant, dt: Date, lat: number, lng: number, height?: number): {
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
    getCalendarTithi(sunRise: number, mlpgPanchangImpl: MlpgPanchangImpl): number;
    getCalendarNakshatra(mlpgCalculateFunc: MlpgCalculateFunc, mlpgPanchangImpl: MlpgPanchangImpl, ayanamsa: number, sunRise: number): number;
    getCalendarYoga(mlpgCalculateFunc: MlpgCalculateFunc, mlpgPanchangImpl: MlpgPanchangImpl, sunRise: number, ayanamsa: number): number;
    getCalendarRaasi(mlpgPanchangImpl: MlpgPanchangImpl, Lsun: number, ayanamsa: number): number;
    getMasa(mlpgPanchangImpl: MlpgPanchangImpl, tithi: number, sunrise: number): {
        n_maasa: number;
        is_leap_month: boolean;
    };
    getRitu(masa_num: number): number;
}
