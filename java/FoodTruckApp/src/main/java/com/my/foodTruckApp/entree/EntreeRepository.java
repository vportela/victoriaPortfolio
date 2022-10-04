package com.my.foodTruckApp.entree;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class EntreeRepository {

    private final JdbcTemplate jdbcTemplate;

    public Entree createNewEntree(EntreeRequestBody entreeRequestBody) {
        String newEntreeSql = "INSERT INTO entree(name,price) VALUES(?,?) returning * ";
        Entree newEntree = jdbcTemplate.queryForObject(
                newEntreeSql,
                new BeanPropertyRowMapper<>(Entree.class),
                entreeRequestBody.getName(),
                entreeRequestBody.getPrice()
        );
        return newEntree;
    }

    public Entree getEntreeById(Integer id) {
        String entreeByIdSql = "SELECT * FROM entree WHERE id = ? ";
        try {
            Entree entreeById = jdbcTemplate.queryForObject(
                    entreeByIdSql,
                    new BeanPropertyRowMapper<>(Entree.class),
                    id
            );
            return entreeById;
        } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
            log.error("No entree found with this id: " + id);
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "No entree found with this id: " + id
            );
        }
    }

    public List<Entree> getAllEntrees() {
        String sql = "SELECT * from entree";
        List<Entree> entrees = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Entree.class)
        );
        return entrees;
    }

    public void deleteEntreeById(Integer id) throws ResponseStatusException {
        String deleteSql = "DELETE FROM entree WHERE id = ? ";
        jdbcTemplate.update(deleteSql, id);
        log.info("deleted entree with id: " + id);

    }

    public void createEntreeOrder(Integer orderId, Integer entreeId) throws ResponseStatusException {
        String entreeSql = "INSERT INTO entree_ordered (order_id, entree_id) VALUES (?, ?) RETURNING * ";
        EntreeOrdered newEntreeOrdered = jdbcTemplate.queryForObject(
                entreeSql,
                new BeanPropertyRowMapper<>(EntreeOrdered.class),
                orderId,
                entreeId
        );
        System.out.println("newEntreeOrdered: " + newEntreeOrdered);
    }
}
