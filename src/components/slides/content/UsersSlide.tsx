import { motion } from "framer-motion";

interface UsersSlideProps {
  data: {
    userGroups: Array<{
      title: string;
      features: string[];
      desc: string;
    }>;
    contractAddress?: string;
    version?: string;
  };
}

export const UsersSlide = ({ data }: UsersSlideProps) => {
  return (
    <div className="pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {data.userGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass hover:border-primary/30 transition-colors p-6 md:p-8 flex flex-col min-h-[220px]"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {group.features.map((feature) => (
                <span key={feature} className="badge-primary text-sm px-3 py-1">
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed flex-1">
              {group.desc.split(/\*(.+?)\*/g).map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold text-foreground">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
