package com.example.rebutarporfolio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {

    @GetMapping("/index")
    public String serveIndexPage(){
        return "index.html";
    }

    @GetMapping("/Skills")
    public String serveSkillsPage() {
        return "Skills.html";
    }

    @GetMapping("/Grades")
    public String serveGradesPage(){
        return "Grades.html";
    }

    @GetMapping("/Journal")
    public String serveJournalPage(){
        return "Journal.html";
    }

    @GetMapping("/Gallery")
    public String serveGalleryPage(){
        return "Gallery.html";
    }
}