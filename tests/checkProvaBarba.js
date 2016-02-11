describe('testBarba', function() {
    var d = document.querySelector('.box');

    it('Test de prova', function() {
        expect(d.nodeName).toBe('P');
    });
});