import { Rembg } from "rembg-node";

const rembg = new Rembg();

export async function removeBackground(imageBuffer) {
    return await rembg.remove(imageBuffer);
}
