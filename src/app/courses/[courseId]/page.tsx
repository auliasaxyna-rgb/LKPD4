type CourseIdProps = {
    params: {
        courseId: string
    };
}

export default function CourseId({params}: CourseIdProps) {
    return (
        <div>
            <h2>Ini halaman kursus: {params.courseId}</h2>
        </div>
    );
}