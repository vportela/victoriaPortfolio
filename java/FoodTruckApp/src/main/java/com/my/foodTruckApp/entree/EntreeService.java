package com.my.foodTruckApp.entree;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EntreeService {

    private final EntreeRepository entreeRepository;

    public Entree createNewEntree(EntreeRequestBody entreeRequestBody) {
        return entreeRepository.createNewEntree(entreeRequestBody);
    }

    public Entree gettingEntreeById(Integer id) {
        return entreeRepository.getEntreeById(id);
    }

    public List<Entree> gettingAllEntrees() {
        return entreeRepository.getAllEntrees();
    }

    public void deleteEntreeById(Integer id) throws ResponseStatusException {
        entreeRepository.getEntreeById(id);
        entreeRepository.deleteEntreeById(id);
    }
}
