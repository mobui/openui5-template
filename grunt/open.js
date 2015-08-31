module.exports = function(grunt, config) {
    var GetChromeName = function(){
        var chrome;
        switch (process.platform){
            case 'win32':
                chrome = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
                break;
            case 'darwin':
                chrome = 'Google Chrome';
                break;
            case 'linux':
                chrome = 'google-chrome';
                break;
            default:
                chrome = 'Google Chrome';
        }
        return chrome;
    };
    return {
        src: {
            path: 'http://<%= serve.host %>:<%= serve.src_port %>',
            options: {
                delay: 5
            },
            app: GetChromeName()
        },
        dist: {
            path: 'http://<%= serve.host %>:<%= serve.dist_port %>',
            options: {
                delay: 500
            },
            app: GetChromeName()
        }
    }
};