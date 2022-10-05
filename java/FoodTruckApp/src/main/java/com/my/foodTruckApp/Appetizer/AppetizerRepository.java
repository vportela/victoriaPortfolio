package com.my.foodTruckApp.Appetizer;

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
public class AppetizerRepository {

    private final JdbcTemplate jdbcTemplate;


    public Appetizer createNewAppetizer(AppetizerRequestBody appetizerRequestBody) {
        String newAppetizerSql = "INSERT INTO appetizer(name,price) VALUES(?, ?) returning *";
        Appetizer newAppetizer = jdbcTemplate.queryForObject(
                newAppetizerSql,
                new BeanPropertyRowMapper<>(Appetizer.class),
                appetizerRequestBody.getName(),
                appetizerRequestBody.getPrice()
        );
        log.info("REQUEST BODY (repository): " + appetizerRequestBody);

        return newAppetizer;
    }

    public Appetizer getAppetizerById(Integer id) {
        String sql = "SELECT * FROM appetizer WHERE id = ? ";
        try {
            Appetizer appetizerById = jdbcTemplate.queryForObject(
                    sql,
                    new BeanPropertyRowMapper<>(Appetizer.class),
                    id
            );
            return appetizerById;
        } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
            log.error("No appetizer found with the id: " + id);
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "No appetizer found with the id: " + id
            );

        }
    }

    public List<Appetizer> getAllAppetizers() {
        String sql = "SELECT * FROM appetizer";
        List<Appetizer> appetizers = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Appetizer.class)
        );
        return appetizers;
    }

    public void deleteAppetizerById(Integer id) throws ResponseStatusException {

        String deleteSql = "DELETE FROM appetizer WHERE id = ?";
        jdbcTemplate.update(deleteSql, id);
        log.info("deleted appetizer with id: " + id);
    }

    public AppetizerOrdered createAppetizerOrder(Integer orderId, Integer appetizerId) throws ResponseStatusException {
        String appetizerSql = "INSERT INTO appetizer_ordered (order_id, appetizer_id) VALUES (?, ?) RETURNING * ";
        AppetizerOrdered newAppetizerOrdered = jdbcTemplate.queryForObject(
                appetizerSql,
                new BeanPropertyRowMapper<>(AppetizerOrdered.class),
                orderId,
                appetizerId
        );
        log.info("newAppetizerOrdered: " + newAppetizerOrdered);
        return newAppetizerOrdered;
    }
}
