// ProjectModal.jsx
import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-900 rounded-lg p-6 w-full max-w-md relative">
        {/* Botão de fechar no canto superior direito */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300 z-10"
        >
          <IoClose size={24} />
        </button>

        {/* Container de mídia */}
        <div className="w-full h-48 mb-4">
          {project.video && project.video.trim() !== "" ? (
            <video
              src={project.video}
              alt={project.title}
              className="w-full h-full object-cover rounded-md"
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>

        <p className="text-white mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          {/* Botão GitHub só aparece se project.github tiver conteúdo válido */}
          {project.github && project.github.trim() !== "" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>
          )}
          
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            View website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;