module.exports = function (grunt) {

    grunt.initConfig({

        jekyll: {
            dev: {
                dest: '_site'
            }
        },

        watch: { // for development run 'grunt watch'
            jekyll: {
                files: ['**/*.html', '**/*.md', '!_site/**', '!README.md'],
                tasks: ['jekyll:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');


    grunt.registerTask('default', 'jekyll:dev');
};
