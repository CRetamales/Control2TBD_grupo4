package cl.tbd.espadaespiral.services;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import cl.tbd.espadaespiral.models.Manga;
import cl.tbd.espadaespiral.repositories.MangaRepository;


@RestController
public class MangaService{
    private final MangaRepository mangaRepository;

    MangaService(MangaRepository mangaRepository){
        this.mangaRepository = mangaRepository;
    }

    @GetMapping("/manga")
    public List<Manga> getAllManga(){
        System.out.println(mangaRepository.getAll());
        return mangaRepository.getAll();
    }


    @GetMapping("/manga/getByName/{nombremanga}")
    public List<Manga> getMangaByNombre(@PathVariable String nombremanga){
        return mangaRepository.showMangaByName(nombremanga);
    }


    @GetMapping("/manga/getById/{id}")
    public List<Manga> getMangaById(@PathVariable long id){
        return mangaRepository.showMangaById(id);
    }


    @GetMapping("/manga/count")
    public String countManga(){
        int total = mangaRepository.countMangas();
        return String.format("Se tienen %s mangas.", total);
    }


    @RequestMapping(value = "/manga/create", produces = "application/json", method = {RequestMethod.GET, RequestMethod.POST})
    public void createManga(){
        //Manga manga = new Manga(7, "One Piece", "Eiichiro Oda", "Comedia", "Shonen Jump", "Japones", 1, 100, 1000);
        //Manga manga2 = new Manga(5, "Naruto", "Masashi Kishimoto", "Comedia", "Shonen Jump", "Japones", 1, 100, 1000);
        Manga manga3 = new Manga(15, "Bleach", "Tite Kubo", "Comedia", "Shonen Jump", "Japones", 1, 100, 1000);
        mangaRepository.createManga(manga3);
    }
    

    @RequestMapping(value = "/manga/deleteByName/{nombremanga}", produces = "application/json", method = {RequestMethod.GET, RequestMethod.DELETE})
    public void deleteManga(@PathVariable String nombremanga){
        mangaRepository.deleteMangaByName(nombremanga);
    }


    @RequestMapping(value = "/manga/deleteById/{id}", produces = "application/json", method = {RequestMethod.GET, RequestMethod.DELETE})
    public void deleteManga(@PathVariable long id){
        mangaRepository.deleteMangaById(id);
    }


    @RequestMapping(value = "/manga/updateByName/{nombremanga}", produces = "application/json", method = {RequestMethod.GET, RequestMethod.PUT})
    public void updateManga(@PathVariable String nombremanga){
        mangaRepository.updateMangaByName(nombremanga);
    }


    @RequestMapping(value = "/manga/updateById/{id}", produces = "application/json", method = {RequestMethod.GET, RequestMethod.PUT})
    public void updateManga(@PathVariable long id){
        mangaRepository.updateMangaById(id);
    }

}
