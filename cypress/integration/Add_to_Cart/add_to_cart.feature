Feature: Ecommerece Site: Add to cart


    Scenario: Add to cart and book product
        Given Visit the Ecomm Site
        When Search the product which starts from "ca"
        And Add "Carrot" in the cart
        Then Place order And select country and check condition
        And Validate the Thank You message

    Scenario: Add to cart and book product
        Given Visit the Ecomm Site
        When Search the product which starts from "po"
        And Add "Potato" in the cart
        Then Place order And select country and check condition
        And Validate the Thank You message

