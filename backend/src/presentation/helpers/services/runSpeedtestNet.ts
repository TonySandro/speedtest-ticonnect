import { ResponseSpeedTest } from './../../../domain/models/responseSpeedTest';
import { UniversalSpeedtest } from "universal-speedtest";

export class RunSpeedtestNet {
    async run(): Promise<ResponseSpeedTest> {
        const universalSpeedtest = new UniversalSpeedtest({
            measureUpload: true
            // downloadUnit: SpeedUnits.MBps
        });

        return universalSpeedtest.runSpeedtestNet().then(result => {
            return result
        }).catch(e => {
            console.error(e.message);
            return e
        });
    }
}