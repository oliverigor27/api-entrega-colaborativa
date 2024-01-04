import { Test, TestingModule } from "@nestjs/testing";
import { RegisterService } from "../../services/register.service";
import { RegisterRepository } from "../../repositories/register.repository";
import { PrismaService } from "src/infra/prisma/services/prisma.service";
import { RegisterDto } from "../../dto/register.dto";
import { Roles } from "../../enum/roles.enum";
import { BadRequestException } from "@nestjs/common";

describe("Register Suit Test", () => {
    let registerService: RegisterService;
    let registerRepository: RegisterRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ RegisterService, RegisterRepository, PrismaService ]
        }).compile()

        registerService = module.get<RegisterService>(RegisterService);
        registerRepository = module.get<RegisterRepository>(RegisterRepository);
    });

    it("Should be defined!", () => {
        expect(registerService).toBeDefined();
    });

    describe("#CreateUser", () => {
        it("Should create a new USER and return the right properties!", async () => {
            const mock: RegisterDto = {
                username: "johndoe",
                email: "johndoe@gmail.com",
                password: "Abc@270598",
                role: Roles.User
            }

            const mockResult = { message: "User created successfully!", id: "2358c28a-aa98-4151-9c84-aa3a03dfa507" }

            jest.spyOn(registerRepository, "createUser").mockResolvedValueOnce(mockResult);

            const result = await registerService.create(mock);

            expect(registerRepository.createUser).toHaveBeenCalledWith(mock);
            expect(result).toEqual(mockResult);
        });

        it("Should not be able to create a new user without the right role!", async () => {
            const mock: RegisterDto = {
                username: "johndoe",
                email: "johndoe@gmail.com",
                password: "Abc@270598",
                role: "Teste"
            }

            const mockResult = {
                "message": [
                  "role must be one of the following values: receiver, sender, postman"
                ],
                "error": "Bad Request",
                "statusCode": 400
              }

            jest.spyOn(registerRepository, "createUser").mockRejectedValueOnce(mockResult);

            await expect(registerService.create(mock)).rejects.toThrow("Erro when tried to create a new user!");
        });
    })
})