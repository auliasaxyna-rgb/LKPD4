type MaterialIdProps = {
    params: {
        courseId: string,
        materialId: string
    };
}

export default function MaterialId({params}: MaterialIdProps) {
    return (
        <div>
            <h2>Melihat materi {params.materialId} untuk mata pelajaran {params.courseId}</h2>
        </div>
    );
}