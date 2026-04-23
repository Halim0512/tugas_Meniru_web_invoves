interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 group cursor-pointer">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-64 w-64 rounded-full border-10 border-red-900 mx-auto object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="border-4 border-red-900 w-full p-4 rounded-lg shadow-xl text-center">
        {/* overlay */}
        <h3 className="text-xl text-red-900 font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;