// app/api/menu/upload/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const uploadDir = path.join(process.cwd(), "public/uploads");

async function ensureUploadDirExists() {
    try {
        await fs.access(uploadDir);
    } catch {
        await fs.mkdir(uploadDir, { recursive: true });
    }
}

export async function POST(req: Request) {
    try {
        await ensureUploadDirExists();

        const formData = await req.formData();
        const file = formData.get("image") as File;

        if (!file) {
            return NextResponse.json(
                { success: false, message: "No file uploaded" },
                { status: 400 }
            );
        }
        

        let filePath: any = path.join(uploadDir, file.name.split(" ").join(''));

        const buffer = await file.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(buffer))

        const pathName = "/" + filePath.replace("E:\\react\\restaurant_project_next_js\\youmeal\\public\\uploads\\", "uploads/").split("/").at(-1);

        return NextResponse.json({
            success: true,
            message: "Image uploaded successfully",
            data: pathName,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export async function PATCH(req: Request) {
    try {
        await ensureUploadDirExists();

        const formData = await req.formData();
        const file = formData.get("image") as File;
        const oldFileName = formData.get("oldFileName") as string;

        if (!file || !oldFileName) {
            return NextResponse.json(
                { success: false, message: "No file or old file name provided" },
                { status: 400 }
            );
        }

        const oldFilePath = path.join(uploadDir, oldFileName);

        /* if (!fs.existsSync(oldFilePath)) {
            return NextResponse.json(
                { success: false, message: "Old file not found" },
                { status: 404 }
            );
        } */

        // Удаляем старый файл
        await fs.unlink(oldFilePath);

        // Сохраняем новый файл
        const newFilePath = path.join(uploadDir, file.name.split(" ").join(''));

        const buffer = await file.arrayBuffer();
        await fs.writeFile(newFilePath, Buffer.from(buffer));

        const pathName = "/" + newFilePath.replace("E:\\react\\restaurant_project_next_js\\youmeal\\public\\uploads\\", "uploads/").split("/").at(-1);

        return NextResponse.json({
            success: true,
            message: "Image updated successfully",
            data: pathName,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

/* export async function PATCH(req: Request) {
    try {
        await ensureUploadDirExists();

        const formData = await req.formData();
        const file = formData.get("image") as File;

        if (!file) {
            return NextResponse.json(
                { success: false, message: "Файл не загружен" },
                { status: 400 }
            );
        }

        const filePath = path.join(uploadDir, file.name.split(" ").join(''));

        // Проверка существования файла перед обновлением
        try {
            await fs.access(filePath);
        } catch {
            return NextResponse.json(
                { success: false, message: "Файл не найден" },
                { status: 404 }
            );
        }

        const buffer = await file.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(buffer));

        const pathName = "/" + filePath.replace("E:\\react\\restaurant_project_next_js\\youmeal\\public\\uploads\\", "uploads/").split("/").at(-1);

        return NextResponse.json({
            success: true,
            message: "Изображение успешно обновлено",
            data: pathName,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
} */