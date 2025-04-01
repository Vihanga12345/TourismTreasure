import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Meet our dedicated team of travel professionals committed to making your Sri Lankan experience unforgettable.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.position}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent2 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} className="text-primary hover:text-accent2 transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} className="text-primary hover:text-accent2 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a href={member.socialLinks.email} className="text-primary hover:text-accent2 transition-colors">
                      <i className="far fa-envelope"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
