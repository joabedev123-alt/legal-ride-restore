import { useEffect, useState } from 'react';
import img1 from '../assets/whatsapp-image-1-blurred.png';
import img2 from '../assets/whatsapp-image-2-blurred.png';
import img3 from '../assets/whatsapp-image-3-blurred.png';
import img4 from '../assets/whatsapp-image-4-blurred.png';

const WhatsAppGallerySection = () => {
    const images = [img1, img2, img3, img4];

    const services = [
        "Liberação em delegacias",
        "Liberação em pátios",
        "Localização de veículos"
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('whatsapp-gallery');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="whatsapp-gallery" className="section-padding relative overflow-hidden bg-secondary/30">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-grid-white/5 opacity-[0.05] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

                {/* Subtitles Section */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                        Nossos <span className="gradient-text">Resultados</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                                <span className="font-bold text-lg md:text-xl text-foreground">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl glass-card aspect-[3/4] ${isVisible ? 'animate-fade-up' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            <img
                                src={img}
                                alt={`Trabalho realizado da Legal Ride Restore ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                <div className="px-3 py-1.5 rounded-lg bg-[#25D366]/90 text-white text-xs font-bold inline-block">
                                    Caso Concluído
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatsAppGallerySection;
