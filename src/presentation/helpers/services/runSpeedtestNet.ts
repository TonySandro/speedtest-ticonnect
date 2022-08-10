import { ResponseSpeedTest } from './../../../domain/models/responseSpeedTest';
import { UniversalSpeedtest, SpeedUnits } from "universal-speedtest";

export class RunSpeedtestNet {
    async run(): Promise<ResponseSpeedTest> {
        const universalSpeedtest = new UniversalSpeedtest({
            measureUpload: true,
            downloadUnit: SpeedUnits.MBps
        });

        return universalSpeedtest.runSpeedtestNet().then(result => {
            console.log(`Ping: ${result.ping} ms`);
            console.log(`Download speed: ${result.downloadSpeed} MBps`);
            console.log(`Upload speed: ${result.uploadSpeed} Mbps`);
            return result
        }).catch(e => {
            console.error(e.message);
            return e
        });
    }
}