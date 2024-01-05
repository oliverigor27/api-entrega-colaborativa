import { Test, TestingModule } from "@nestjs/testing";
import { UserConfigService } from "../../services/userConfig.service";
import { UserConfigRepository } from "../../repository/UserConfig/userConfig.repository";
import { PrismaService } from "src/infra/prisma/services/prisma.service";
import { CompleteRegisterDTO } from "../../dto/completeRegister.dto";

describe("User Config", () => {
    let userConfigService: UserConfigService;
    let userConfigRepository: UserConfigRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserConfigRepository, UserConfigService, PrismaService]
        }).compile();

        userConfigService = module.get<UserConfigService>(UserConfigService);
        userConfigRepository = module.get<UserConfigRepository>(UserConfigRepository);
    });

    it("Should be defined!", () => {
        expect(userConfigService).toBeDefined();
    });

    describe("#CompleteRegister", () => {
        it("Should complete the register of a new user!", async () => {
            const id = "5db22ae2-ccda-41cf-9b91-10694767ff0d";
            const mock: CompleteRegisterDTO = {
                first_name: "John",
                last_name: "Doe",
                address: "Hells Kitchen 45",
                city: "New York",
                state: "New York",
                country: "New York",
                id_card: "1578365420"
            }

            const mockReturn = "User was successfully created!";

            jest.spyOn(userConfigRepository, 'completeRegister').mockResolvedValueOnce(mockReturn);

            const result = await userConfigService.completeRegister(id, mock);

            expect(userConfigRepository.completeRegister).toHaveBeenCalledWith(id, mock);
            expect(result).toEqual(mockReturn);
        });

    })
});