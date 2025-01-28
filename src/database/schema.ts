import mongoose, { Schema, Document, Model } from 'mongoose';

export interface AlphaDate extends Document {
    letter: string;
    ideas: string[];
}

const AlphaDateSchema: Schema = new Schema({
    letter: { type: String, required: true },
    ideas: { type: [String], required: true },
});

const AlphaDateModel: Model<AlphaDate> = mongoose.models.AlphaDate || mongoose.model<AlphaDate>('AlphaDate', AlphaDateSchema);

export default AlphaDateModel;