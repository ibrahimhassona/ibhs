import React, { useMemo } from 'react';

const TubeVideoRender = ({ data }) => {
  // Improved video ID extraction function
  const extractVideoId = (url) => {
    const videoIdPatterns = [
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/?)([A-Za-z0-9_-]{11}))/,
      /(?:https?:\/\/(?:www\.)?youtu\.be\/([A-Za-z0-9_-]{11}))/, // Short YouTube URLs
      /(?:v=|\/?)([A-Za-z0-9_-]{11})/ // Alternative matching patterns
    ];

    for (const regex of videoIdPatterns) {
      const match = url.match(regex);
      if (match) return match[1];
    }

    return null;
  };

  // Use useMemo to memoize video ID extraction
  const videoId = useMemo(() => extractVideoId(data), [data]);

  // Improved error handling and rendering
  if (!videoId) {
    return (
      <div className="text-red-500 p-4 border rounded-md">
        Invalid YouTube URL. Please provide a valid YouTube video link.
      </div>
    );
  }

  return (
    <div className="youtube-embed grid border max-sm:grid-cols-1 max-sm:w-full my-4 transition-all duration-300 animate-fade-up">
      <div className="rounded-md overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        //   className="hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default React.memo(TubeVideoRender);