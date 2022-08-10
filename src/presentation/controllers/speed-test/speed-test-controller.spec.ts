import { SpeedTestController } from './speed-test-controller';

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
    const sut = new SpeedTestController()
    return {
        sut
    }
}

describe('Speed Test Controller', () => {
    test('Should return 200 if valid data is provided', async () => {
        const { sut } = makeSut()

        const httpResponse = await sut.handle()
        expect(httpResponse.statusCode).toBe(200)
    })

})
