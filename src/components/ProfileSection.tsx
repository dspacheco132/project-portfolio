
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="relative">
            <Avatar className="h-48 w-48 border-4 border-white shadow-lg">
              <AvatarImage src="/diogo-profile.jpg" alt="Diogo Pacheco" />
              <AvatarFallback className="bg-blue-100 text-blue-800">
                <User className="h-24 w-24" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Diogo Pacheco
            </h1>
            <p className="text-xl text-gray-600 mb-4">20 anos</p>
            <p className="text-gray-700 max-w-2xl">
              Desenvolvedor apaixonado por tecnologia com experiência em Oracle Cloud, 
              AWS, Terraform, Docker, e diversas outras tecnologias. Meu foco é criar 
              soluções técnicas eficientes e inovadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
