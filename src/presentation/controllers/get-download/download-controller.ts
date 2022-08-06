import { UniversalSpeedtest, SpeedUnits } from "universal-speedtest";

const universalSpeedtest = new UniversalSpeedtest({
    measureUpload: true,
    // uploadUnit: SpeedUnits.MBps,
    downloadUnit: SpeedUnits.MBps
});

universalSpeedtest.runSpeedtestNet().then(result => {
    console.log(`Ping: ${result.ping} ms`);
    console.log(`Download speed: ${result.downloadSpeed} MBps`);
    console.log(`Upload speed: ${result.uploadSpeed} Mbps`);
}).catch(e => {
    console.error(e.message);
});

