import React from 'react';
import { Container } from 'react-bootstrap';

const Media = () => (
  <Container className="py-3">
    <h1>Media</h1>
    <h3>EE 496 Presentations - Fall 2022</h3>
    <iframe
      style={{ maxWidth: '900px' }}
      src="https://drive.google.com/file/d/1JXk1gqM3nG3usVIskd-x3RzfzVd4-dPO/preview"
      title="Google Drive video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
    <iframe
      style={{ maxWidth: '900px' }}
      src="https://drive.google.com/file/d/1OGfY4ra9kchzsNLte7EZIBY4bqTjsgna/preview"
      title="Google Drive video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
    <iframe
      style={{ maxWidth: '900px' }}
      src="https://drive.google.com/file/d/1bAWeu1PRvJWsiokTEsvv899pTd-RUtK7/preview"
      title="Google Drive video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </Container>
);

export default Media;
