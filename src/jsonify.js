var path = require('path');

// split all source-code related params like line number and position
function clean(node) {
    if ( node.source ) {
        var file = node.source.input.file
        node.source = {input:{}}
        node.source.input.file = path.basename(file);
    }
    if ( node.nodes ) node.nodes = node.nodes.map(clean);
    return node;
}

// postcss tree to JSON
module.exports = function jsonify(node) {
    var cleaned = clean(node.toJSON());
    return JSON.stringify(cleaned, null, 2);
};
