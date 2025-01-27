import {Notifier, JSON} from "@klave/sdk"

export type address = string
export type amount = u64
export type index = i32

@JSON
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

export function error(message: string) : void {
    Notifier.sendJson<ErrorMessage>({
        success: false,
        message: message
    });

}

export function success(message: string) : void {
    Notifier.sendJson<ErrorMessage>({
        success: true,
        message: message
    });
}

