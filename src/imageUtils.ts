import sharp from 'sharp';

export async function resizeImage(
    imageBuffer: Buffer,
    width: number,
    height: number
) {
    try {
        const outputBuffer = await sharp(imageBuffer)
            .resize({
                width,
                height
            })
            .toBuffer();
        return outputBuffer;
    } catch (e) {
        console.error('Error when resizing image', e);
    }
}
