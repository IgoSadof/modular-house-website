import React from 'react';
import Typography from '@material-ui/core/Typography';

const splitText = (text) => {
  let articles = text.split('\n\r\n')?.length > 0 ? text.split('\n\r\n') : text;
  return Array.isArray(articles) ? (
    articles.map((article, index) => (
      <Typography variant='body1' key={index}>
        {article}
      </Typography>
    ))
  ) : (
    <Typography variant='body1'>{articles}</Typography>
  );
};
export default splitText;
