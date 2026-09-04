interface TeacherIdProps {
  params: {
    teacherId: string;
  };
}

export default function TeacherId({ params }: TeacherIdProps) {
  return (
    <div>
      <h2>Melihat Profil Akademik untuk Guru {params.teacherId}</h2>
      <p>Guru Mapel: Matematika</p>
    </div>
  );
}