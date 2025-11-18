import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    // Escena, cámara y renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountNode.appendChild(renderer.domElement);

    // Partículas de fondo
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const positionArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Estrellas fugaces
    const shootingStars = [];
    const createShootingStar = () => {
      const geometry = new THREE.SphereGeometry(0.03, 6, 6);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);
      star.position.set(
        Math.random() * 6 - 3, // x
        Math.random() * 3 + 2, // y
        Math.random() * -5 // z
      );
      scene.add(star);
      shootingStars.push({ mesh: star, speed: Math.random() * 0.05 + 0.02 });
    };

    // Crear algunas estrellas al inicio
    for (let i = 0; i < 7; i++) createShootingStar();

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);

      // Girar partículas
      particlesMesh.rotation.y += 0.0005;

      // Animar estrellas
      shootingStars.forEach((star) => {
        star.mesh.position.x -= star.speed;
        star.mesh.position.y -= star.speed / 2;
        if (star.mesh.position.x < -5 || star.mesh.position.y < -2) {
          // Reset posición para seguir reapareciendo
          star.mesh.position.set(Math.random() * 6 - 3, Math.random() * 3 + 2, Math.random() * -5);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Responsividad
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Limpieza
    return () => {
      if (mountNode && renderer.domElement.parentNode === mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBackground;
