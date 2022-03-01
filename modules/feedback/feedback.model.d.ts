import { IPLocation } from '@app/processors/helper/helper.service.ip';
export declare enum FeedbackEmotion {
    Hate = 1,
    Dislike = 2,
    Neutral = 3,
    Like = 4,
    Love = 5
}
export declare const FEEDBACK_EMOTIONS: {
    value: FeedbackEmotion;
    text: string;
    emoji: string;
}[];
export declare const FEEDBACK_EMOTION_VALUES: FeedbackEmotion[];
export declare class FeedbackBase {
    tid: number;
    emotion: number;
    get emotion_text(): string;
    get emotion_emoji(): string;
    content: string;
    user_name: null | string;
    user_email: null | string;
}
export declare class Feedback extends FeedbackBase {
    id: number;
    marked: boolean;
    remark: string;
    origin: null | string;
    user_agent?: string;
    ip: null | string;
    ip_location: null | (Partial<IPLocation> & {
        [key: string]: any;
    });
    create_at?: Date;
    update_at?: Date;
}
export declare const FeedbackProvider: import("@nestjs/common").Provider<any>;