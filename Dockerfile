FROM docker.io/cypress/included:12.15.0
RUN apt-get update && apt-get install -y imagemagick
RUN sed -i '/<\/policymap>/i\<policy domain="coder" rights="read | write" pattern="PDF" />' /etc/ImageMagick-6/policy.xml
COPY run.sh /usr/local/bin/run.sh
COPY app /app
RUN cd /app && npm install
ENTRYPOINT ["/usr/local/bin/run.sh"]
