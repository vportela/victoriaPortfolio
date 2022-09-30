package com.my.foodTruckApp.entree;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
