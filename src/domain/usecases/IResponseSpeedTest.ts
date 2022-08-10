import { ResponseSpeedTest } from '../models/responseSpeedTest';

export interface IResponseSpeedTest {
     run(): Promise<ResponseSpeedTest> 
}