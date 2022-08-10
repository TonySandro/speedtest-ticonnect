import { serverError } from './../../helpers/http/http-helper';
import { ResponseSpeedTest } from '../../../domain/models/responseSpeedTest';
import { SpeedTestController } from './speed-test-controller';

const makeSpeedTest = () => {
    class RunTest  {
        async run(): Promise<ResponseSpeedTest> {
            return new Promise(resolve => resolve(makeFakeResponse()))

        }
    }
    return new RunTest()
}

const makeFakeResponse = () => ({
    client: { ip: '201.140.254.81', isp: 'Giganet Provedor De Internet Ltda' },
    ping: 30.61,
    jitter: 13.066,
    server: {
        sponsor: 'Newnet',
        city: 'Vicência',
        country: 'Brazil',
        countryCode: 'BR',
        distance: 31.26
    },
    downloadSpeed: 157.1,
    uploadSpeed: 87.39,
    totalTime: 38.4
})

const makeSut = () => {
    const speedTest = makeSpeedTest()
    const sut = new SpeedTestController(speedTest)
    return {
        sut,
        speedTest
    }
}

describe('Speed Test Controller', () => {
    test('Should return 200 if valid data is provided', async () => {
        const { sut } = makeSut()

        const httpResponse = await sut.handle()
        expect(httpResponse.statusCode).toBe(200)
    })
    
    test('Should return 500 if speedTest throws', async () => {
        const { sut, speedTest } = makeSut()
        jest.spyOn(speedTest, 'run').mockImplementationOnce(async () => {
            return new Promise((resolve, reject) => reject(new Error()))
        })

        const httpResponse = await sut.handle()
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse).toEqual(serverError(new Error()))
    })
})
