import { MlpgLocalConstant } from './mlpgLocalConstant';
import { MlpgPanchangImpl } from './mlpgPanchangImpl';
export declare class MlpgCalculateFunc {
    calculate(d: Date, mlpgConstant: MlpgLocalConstant): {
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
    getTithi(Lmoon: number, Lsun: number): number;
    getNakshatra(mlpgPanchangImpl: MlpgPanchangImpl, Lmoon: number, ayanamsa: number): number;
    getZYoga(mlpgPanchangImpl: MlpgPanchangImpl, ayanamsa: number, jd: number): number;
    getYoga(zyoga: number): number;
    getKarana(Lmoon0: number, Lsun0: number): number[];
    getRaasi(mlpgPanchangImpl: MlpgPanchangImpl, Lmoon: number, ayanamsa: number): number;
    getPaksha(n_tithi: number): number;
    getRaasiGuna(raasiIndex: any): number;
    getTrinityByNakshatra(raasiIndex: any): number;
    getGanaViaNakshatra(raasiIndex: any): number;
}
