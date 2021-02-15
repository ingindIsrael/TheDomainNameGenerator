let pronoun = ['the','your','one','each'];
let adj = ['mad', 'dangerous', 'hateful', 'riduculous' ];
let noun = ['group','club', 'militia','horde'];
let ext = ['extinguished','forgotten','perished','lost']
let frase = '';
for (var a=0; a<pronoun.length; a++) {
    for (var b=0; b<adj.length; b++) {
        for (var c=0; c<noun.length; c++) {
             for (var d=0; d<noun.length; d++) {
                console.log(pronoun[a]+adj[b]+noun[c]+'.'+ext[d]);
             }
        }
    }
}