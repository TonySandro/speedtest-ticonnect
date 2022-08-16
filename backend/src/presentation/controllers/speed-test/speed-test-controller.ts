import { IResponseSpeedTest } from './../../../domain/usecases/IResponseSpeedTest';
import { success, serverError } from "../../helpers/http/http-helper";
import { HttpResponse } from "../../protocols/http";
import { Controller } from '../../protocols/controller';

export class SpeedTestController implements Controller {
    constructor(private readonly speedTest: IResponseSpeedTest) {
        this.speedTest = speedTest
    }
    async handle(): Promise<HttpResponse> {
        try {
            const responseRunTest = await this.speedTest.run()

            return success(responseRunTest)
        } catch (error) {
            return serverError(error)
        }

    }
}