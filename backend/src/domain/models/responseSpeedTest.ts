export interface ResponseSpeedTest {
    client: ClientItem
    ping: number
    jitter: number
    server: ServerItem
    downloadSpeed: number
    uploadSpeed: number
    totalTime: number
}

type ServerItem = {
    sponsor: string
    city: string
    country: string
    countryCode: string
    distance: number
}

type ClientItem = {
    ip: string
    isp: string
}