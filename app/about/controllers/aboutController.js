define([], function(){
    'use strict';

    function aboutController($scope) {
        var about = {program: {}, instructor: {}};
        about.program.text1 = 'We are a 501c3 (EIN: 27-2307793), non-profit organization with a mission to train self-defense to children on the north-side of Pittsburgh.';
        about.program.text2 = 'Children learn discipline and respect via the teachings of Tang Soo Do (Hangul: 당수도 , Chinese: 撞手道) Moo Duk Kwan (Hangul: 무덕관)';
        about.program.text3 = 'Tang Soo Do (Defense/Strike with the way of the worthy hand) is a traditional style of martial art.';
        about.program.text4 = 'The NSCSP has been teaching children on the north-side of Pittsburgh since March 2nd, 2010.';
        about.program.irs501c3Link = 'http://501c3lookup.org/C_S_KIM_KARATE_CHILD_SAFETY_PROGRAM_INC/';
        about.program.news1 = 'Click ';
        about.program.newsLink = 'http://www.post-gazette.com/pg/10109/1051586-53.stm';
        about.program.news2 = 'here';
        about.program.news3 = ' to see how the program got started.';
        about.instructor.text1 = 'Sa Bom Nim (Master)';
        about.instructor.text2 = 'Dustin J. Allensworth';
        about.instructor.text3 = 'I.T.F. Dan#: 26304';
        about.instructor.text4 = 'Rank: 4th degree black-belt';
        about.instructor.text5 = 'Years studied: 1984-1989, 2006-present';
        about.instructor.email = 'dustin.allensworth@nschildsafetyprogram.org';
        $scope.about = about;
    }

    aboutController.$inject=['$scope'];

    return aboutController;
});

