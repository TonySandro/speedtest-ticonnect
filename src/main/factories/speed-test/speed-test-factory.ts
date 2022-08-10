import { RunSpeedtestNet } from '../../../presentation/helpers/services/runSpeedtestNet';
import { SpeedTestController } from "../../../presentation/controllers/speed-test/speed-test-controller"

export const makeSpeedTestController = (): SpeedTestController => {
    const runSpeedtest = new RunSpeedtestNet()
    return new SpeedTestController(runSpeedtest)
}